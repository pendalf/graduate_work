const tabs = ({
    tabHeaderSelector,
    tabSelector,
    tabContentSelector,
    activeTabClass = 'active',
    hideTabClass = 'd-none'

}) => {
    const tabHeader = document.querySelector(tabHeaderSelector),
        tab = tabHeader.querySelectorAll(tabSelector),
        tabContent = document.querySelectorAll(tabContentSelector);

    const toggleTabContent = index => {
        tabContent.forEach((element, i) => {
            if (i === index) {
                tab[i].classList.add(activeTabClass);
                element.classList.remove(hideTabClass);
            } else {
                element.classList.add(hideTabClass);
                tab[i].classList.remove(activeTabClass);
            }
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