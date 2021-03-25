class Formula {
    constructor({
        main,
        item,
        icon,
        popup,
        activeClass = 'active-item'
    }) {
        if (!main || !item || !icon || !popup) {
            console.warn('slider-carouser: Необходимо 3 свойства: "slider", "item", "icon", "popup"');
        }

        this.id = Formula.count;

        this.main = document.querySelector(main);
        this.iconSelector = icon;
        this.itemSelector = item;
        this.popupSelector = popup;
        this.activeClass = activeClass;
        this.throttled = false;
    }

    static get count() {
        Formula._counter = (Formula._counter || 0) + 1;
        return Formula._counter;
    }

    init() {
        this.handlers();
    }

    getFit(el) {
        const rect = el.getBoundingClientRect(),
            windowHeight = document.documentElement.clientHeight;
        return rect.top < 0 ? 'bottom' : rect.bottom > windowHeight ? 'top' : null;
    }

    convertTime(time) {
        return parseFloat(time) * 1000;
    }

    mouseenterHandler(e) {
        const target = e.target;
        console.log(target);
        if (!(target instanceof HTMLDocument) && target.closest(this.iconSelector)) {
            const el = target.closest(this.itemSelector),
                popup = el.querySelector(this.popupSelector),
                classes = [this.activeClass],
                position = this.getFit(popup);

            if (position) {
                classes.push(position);
            }

            el.classList.add(...classes);
        }
    }

    mouseleaveHandler(e) {
        const target = e.target;
        if (!(target instanceof HTMLDocument) && target.closest(this.iconSelector)) {
            const el = target.closest(this.itemSelector),
                styles = getComputedStyle(el),
                time = this.convertTime(styles.transitionDuration);
            el.classList.remove(this.activeClass);
            setTimeout(() => {
                target.closest(this.itemSelector).classList.remove('top', 'bottom');
            }, time);
        }
    }

    handlers() {

        this.main.addEventListener('mouseenter', this.mouseenterHandler.bind(this), true);
        this.main.addEventListener('mouseleave', this.mouseleaveHandler.bind(this), true);
    }
}

export default Formula;