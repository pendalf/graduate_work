import SliderCarousel from './SliderCarousel';
import tabs from './tabs';

const repairTypes = () => {
    const repairTypesSliderWrap = document.querySelector('.repair-types-slider-wrap'),
        repairTypesSlider = document.querySelector('.repair-types-slider'),
        sliders = repairTypesSlider.children,
        counter = repairTypesSliderWrap.querySelector('.slider-counter'),
        arrLeft = repairTypesSliderWrap.querySelector('.slider-arrow_left'),
        arrRight = repairTypesSliderWrap.querySelector('.slider-arrow_right'),
        tabContent = document.createElement('div');

    tabContent.className = 'repair-types-tab-content';

    [...sliders].forEach((el, i) => {
        const wrap = document.createElement('div'),
            slider = document.createElement('div'),
            wrapClass = `repair-types-slider-wrap-${i}`,
            sliderClass = 'repair-types-slider';

        wrap.className = wrapClass;
        slider.className = sliderClass;
        wrap.append(slider, counter.cloneNode(true), arrLeft.cloneNode(true), arrRight.cloneNode(true));
        slider.append(...el.children);
        tabContent.append(wrap);

        setTimeout(() => {
            const repairTypeSlider = new SliderCarousel({
                slider: '.' + wrapClass,
                main: '.' + sliderClass,
                prev: '.slider-arrow_left',
                next: '.slider-arrow_right',
                counter: '.slider-counter',
                current: '.slider-counter-content__current',
                total: '.slider-counter-content__total',
                infinity: false,
                slidesToShow: 1
            });
            repairTypeSlider.init();
        }, 0);


    });
    repairTypesSliderWrap.prepend(tabContent);
    repairTypesSlider.remove();
    counter.remove();
    arrLeft.remove();
    arrRight.remove();

    tabs({
        tabHeaderSelector: '.nav-list-repair',
        tabSelector: '.repair-types-nav__item',
        tabContentSelector: '.repair-types-tab-content > div'
    });

    const tabsSlider = new SliderCarousel({
        slider: '.nav-wrap-repair',
        main: '.nav-list-repair',
        prev: '.nav-arrow_left',
        next: '.nav-arrow_right',
        infinity: false,
        dynamicWidth: true,
        display: 'inline-flex',
        slidesToShow: 1
    });
    tabsSlider.init();

};

export default repairTypes;