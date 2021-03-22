const accordeon = opts => {
    const optionsDeafult = {
        selector: typeof opts === 'string' ? opts : '.accordion',
        header: 'h2',
        activeClass: 'msg-active',
        firstOpenned: true,
        oneOpenned: true
    };
    opts = opts instanceof Object ? Object.assign(optionsDeafult, opts) : optionsDeafult;

    const { selector, header, activeClass } = opts;
    const accordeon = document.querySelectorAll(selector);

    const toggleItem = (accordeon, header) => {
        if (opts.oneOpenned && !header.classList.contains(activeClass)) {
            const activeItems = accordeon.querySelectorAll(`.${activeClass}`);
            activeItems.forEach(i => i.classList.remove(activeClass));
        }
        header.classList.toggle(activeClass);
    };

    accordeon.forEach(i => {
        const headers = i.querySelectorAll(header);
        if (opts.firstOpenned) {
            headers.forEach(el => {
                el.classList.remove(activeClass);
            });
            headers[0].classList.add(activeClass);
        }

        i.addEventListener('click', e => {
            if (e.target.closest(header)) {
                toggleItem(i, e.target.closest(header));
            }
        });
    });
};

export default accordeon;