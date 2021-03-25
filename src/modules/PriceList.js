import cookie from './cookies';
import tabs from './tabs';
import SliderCarousel from './SliderCarousel';

class PriceList {

    constructor({
        main,
        tabsHeader,
        tabsContent
    }) {
        this.error = false;
        if (!main) {
            this.error = 'It is required to pass a selector for initialization';
        } else {
            this.priceContainer = document.querySelector(main);

        }
        if (!this.error) {
            this.tabsHeader = this.priceContainer.querySelector(tabsHeader);
            this.tabsContent = this.priceContainer.querySelector(tabsContent);

            this.tabs = new Set();
            this.tabsContentItems = new Set();
            this.priceDate = null;
            this.mainSelector = main
            this.tabsHeaderSelector = tabsHeader;
        }
    }

    static price = {
        _data: null,
        get data() { return this._data; },
        set data(val) {
            this._data = val;
            this.dataListener(val);
        },
        dataListener(val) {},
        registerNewListener(externalListenerFunction) { this.dataListener = externalListenerFunction; }
    }

    static get count() {
        PriceList._counter = (PriceList._counter || 0) + 1;
        return PriceList._counter;
    }

    static fetching = false

    init() {
        if (this.error) {
            console.error(this.error);
            return;
        }
        this.getData();
    }

    setLocalstorage(list) {
        localStorage.price = JSON.stringify(list);
    }

    removeLocalStorage() {
        localStorage.removeItem('heroes');
    }

    getPriceLoaded() {
        const priceLoaded = cookie.get('price-loaded');
        this.cookie = !!priceLoaded;
    }

    fetchPrice() {
        return fetch('./db/db.json')
            .then(res => {
                if (res.status !== 200) {
                    throw new Error('Service is unavailable!');
                }
                return res.json();
            });
    }

    getData() {
        this.getPriceLoaded();
        if (this.cookie && localStorage.price) {
            PriceList.price.data = JSON.parse(localStorage.price);
            this.dataReceived();
            return;
        }
        if (!PriceList.price.data && !PriceList.fetching) {
            PriceList.fetching = true;
            const price = this.fetchPrice();
            price
                .then(res => {
                    cookie.set('price-loaded', true, {
                        'max-age': 3600 * 24
                    });
                    PriceList.price.data = res;
                    this.setLocalstorage(res);
                    this.dataReceived();
                })
                .catch(err => console.error(err));
        } else if (PriceList.fetching) {
            /**
             * if there are several instances of the class and data loading has started,
             * then the listener is hung to expose the static property of the class 
             *
             */
            PriceList.price.registerNewListener(() => this.dataReceived());
        }
    }
    dataReceived() {
        this.dataLoaded = true;
        this.price = PriceList.price.data;
        this.price.forEach(i => {
            if (i.date) {
                this.priceDate = i.date
            }
            if (i.title) {
                this.tabs.add(i.title)
                this.tabsContentItems.add(i.priceList)
            }
        })

        // this.heroes.forEach(card => {
        //     Object.keys(card).forEach(i => this.fields.add(i));
        //     if (card.movies && card.movies.length) {
        //         card.movies.forEach(i => this.movies.add(i));
        //     }
        // });
        this.render();
        // this.handlers();
        // this.hidePromo();
    }

    renderTabsHeader() {
        this.tabsHeader.textContent = '';
        [...this.tabs].forEach(i => {
            this.tabsHeader.insertAdjacentHTML('beforeend',
                `<button class="button_o popup-repair-types-nav__item">${i}</button>`
            )
        })
    }

    renderTabsContentHeader() {
            return `<div class="popup-repair-types-content__head mobile-hide">
                    ${[...this.tabs].reduce((a, tab) => a + `<div class="popup-repair-types-content__head-title">${tab}</div>`, '')}
                    <div class="popup-repair-types-content__head-date">${this.priceDate}<i><i></i></i>
                    </div>
                </div>`;
    }

    renderPriceTableHead() {
        return `<table class="popup-repair-types-content-table__head">
                    <thead>
                        <tr>
                            <th>Виды работ</th>
                            <th class="mobile-hide">Ед. измерения</th>
                            <th class="mobile-hide">Цена за ед.</th>
                        </tr>
                    </thead>
                </table>`
    }

    renderPriceTableRow(row) {
        return `<tr class="mobile-row">
                    <td class="repair-types-name">${row.typeService}</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>
                    <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>
                    <td class="repair-types-value">${row.units.replace(/(\d+)$/, '<sup>$1</sup>')}</td>
                    <td class="repair-types-value">${row.cost} руб.</td>
                </tr>
        `;
    }

    renderPriceTable(table) {
        return `<table class="popup-repair-types-content-table__list">
                    <tbody>
                        ${table.reduce((a, row) => a += this.renderPriceTableRow(row), '')}
                    </tbody>
                </table>
        `;
    }

    renderTabsContent() {
        const tabsContentHeader = this.renderTabsContentHeader(),
            priceTableHead = this.renderPriceTableHead(),
            tabsContentWrapper = document.createElement('div'),
            tabsContentTable = document.createElement('div');

        tabsContentWrapper.className = 'popup-repair-types-content-table-wrap';
        tabsContentTable.className = 'popup-repair-types-content-table'

        const tables = [...this.tabsContentItems].reduce((a, table) => a += this.renderPriceTable(table), '');

        tabsContentWrapper.insertAdjacentHTML('beforeend', priceTableHead)

        tabsContentWrapper.append(tabsContentTable)
        tabsContentTable.innerHTML = tables;

        this.tabsContent.textContent = ''
        this.tabsContent.insertAdjacentHTML('beforeend', tabsContentHeader)
        this.tabsContent.append(tabsContentWrapper)

    }

    startTabs() {
        tabs({
            tabHeaderSelector: this.tabsHeaderSelector,
            tabSelector: '.popup-repair-types-nav__item',
            tabContentSelector: '.popup-repair-types-content-table__list, .popup-repair-types-content__head-title',
            showTabClass: 'active'
        });
        const tabsSlider = new SliderCarousel({
        slider: '.popup-repair-types .nav-wrap-repair',
        main: '.nav-list-popup-repair',
        prev: '.nav-arrow_left',
        next: '.nav-arrow_right',
        infinity: false,
        dynamicWidth: true,
        display: 'inline-flex',
        disable: true,
        slidesToShow: 1,
        responsive: [{
            breakpoint: 1025,
            dynamicWidth: true,
            slidesToShow: 1,
        }]
    });
    tabsSlider.init();
    }

    render() {
        this.renderTabsHeader();
        this.renderTabsContent();
        this.startTabs()
    }
}

export default PriceList;