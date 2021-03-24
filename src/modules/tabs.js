const tabContentArray = selector => {
    const tabsSelectors = typeof selector === 'string' ? selector.split(',').map(i => i.trim()) : selector;
    return tabsSelectors.map(i => document.querySelectorAll(i));
};

const tabs = ({
    tabHeaderSelector,
    tabSelector,
    tabContentSelector,
    activeTabClass = 'active',
    hideTabClass = 'd-none',
    showTabClass = 'visible'

}) => {
    const tabHeader = document.querySelector(tabHeaderSelector),
        tab = tabHeader.querySelectorAll(tabSelector),
        tabContent = tabContentArray(tabContentSelector);

    const toggleTabContent = index => {
        tabContent.forEach(nodeCollection => {
            nodeCollection.forEach((element, i) => {
                if (i === index) {
                    tab[i].classList.add(activeTabClass);
                    element.classList.remove(hideTabClass);
                    element.classList.add(showTabClass);
                } else {
                    element.classList.add(hideTabClass);
                    element.classList.remove(showTabClass);
                    tab[i].classList.remove(activeTabClass);
                }
            });
        });
    };

    tabHeader.addEventListener('click', event => {
        let target = event.target;
        target = target.closest(tabSelector);
        if (target) {
            tab.forEach((item, i) => {
                if (item === target) {
                    toggleTabContent(i);
                }
                return;
            });
        }

    });

    const currentTabStart = [...tab].reduce((a, b, i) => (b.classList.contains(activeTabClass) ? i : a), 0);
    toggleTabContent(currentTabStart);
};

export default tabs;