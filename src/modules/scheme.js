import SliderCarousel from './SliderCarousel';
import tabs from './tabs';


const scheme = () => {

    tabs({
        tabHeaderSelector: '#scheme-list',
        tabSelector: '.scheme-nav__item',
        tabContentSelector: '.scheme-slider__slide, .scheme-description-block',
        showTabClass: 'visible-content-block'
    });

    const tabsSlider = new SliderCarousel({
        slider: '.scheme .nav-wrap',
        main: '.nav-list',
        prev: '.nav-arrow_left',
        next: '.nav-arrow_right',
        infinity: false,
        dynamicWidth: true,
        display: 'inline-flex',
        disable: true,
        slidesToShow: 1,
        responsive: [{
            breakpoint: 1135,
            dynamicWidth: true,
            slidesToShow: 1,
        }]
    });
    tabsSlider.init();
};

export default scheme;