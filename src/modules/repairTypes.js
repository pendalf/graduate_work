import SliderCarousel from './SliderCarousel';
import tabs from './tabs';
import slidersConverter from './slidersConverter';

const slider = () => ({ wrapClass, sliderClass }) => {
    const slider = new SliderCarousel({
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
    slider.init();
};

const repairTypes = () => {

    slidersConverter({
        slidersWrapper: '.repair-types-slider-wrap',
        slaidersContainer: '.repair-types-slider',
        counter: '.slider-counter',
        prevArrow: '.slider-arrow_left',
        nextArrow: '.slider-arrow_right',
        slidersConverterCb: slider()
    });

    tabs({
        tabHeaderSelector: '.nav-list-repair',
        tabSelector: '.repair-types-nav__item',
        tabContentSelector: '.repair-types-slider-wrap .tab-content > div'
    });

    const tabsSlider = new SliderCarousel({
        slider: '.nav-wrap-repair',
        main: '.nav-list-repair',
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

};

export default repairTypes;