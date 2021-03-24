import SliderCarousel from './SliderCarousel';
import tabs from './tabs';
import togglePopup from './togglePopup';
import slidersConverter from './slidersConverter';

const preview = document.querySelectorAll('.designs .preview-block');

preview.forEach(i => [...i.children].forEach((el, i) => el.idItem = i));

const slider = () => ({ wrapClass, sliderClass }) => {

    const id = parseFloat(wrapClass.replace(/[^\d]/g, ''));

    const sliderChage = slider => () => {
        setActivePreview(slider.options.position);
    };

    const slider = new SliderCarousel({
        slider: '.designs-slider-wrap .' + wrapClass,
        main: '.' + sliderClass,
        prev: '.slider-arrow-tablet-mobile_left',
        next: '.slider-arrow-tablet-mobile_right',
        counter: '.slider-counter',
        current: '.slider-counter-content__current',
        total: '.slider-counter-content__total',
        infinity: false,
        slidesToShow: 1
    });
    slider.init();
    slider.afterChange = sliderChage(slider);

    const setActivePreview = current => {
        const items = preview[id].querySelectorAll('.preview-block__item-inner');
        [...items].forEach(i => i.classList.remove('preview_active'));
        items[current].classList.add('preview_active');
    };

    preview[id].addEventListener('click', e => {
        const target = e.target,
            item = target.closest('.preview-block__item');
        if (item) {
            slider.currentPos(item.idItem);
            setActivePreview(item.idItem);
        }
    });

};

const popupSlider = () => ({ wrapClass, sliderClass }) => {

    const slider = new SliderCarousel({
        slider: '.popup-design-slider-wrap .' + wrapClass,
        main: '.' + sliderClass,
        prev: '.popup-arrow_left',
        next: '.popup-arrow_right',
        counter: '.slider-counter',
        current: '.slider-counter-content__current',
        total: '.slider-counter-content__total',
        infinity: false,
        slidesToShow: 1
    });
    slider.init();

};

const mainDesignsBlock = () => {
    slidersConverter({
        slidersWrapper: '.designs-slider-wrap',
        slaidersContainer: '.designs-slider',
        counter: '.slider-counter',
        prevArrow: '.slider-arrow-tablet-mobile_left',
        nextArrow: '.slider-arrow-tablet-mobile_right',
        slidersConverterCb: slider()
    });

    tabs({
        tabHeaderSelector: '.designs .nav-list-designs',
        tabSelector: '.designs-nav__item',
        tabContentSelector: ' .designs-slider-wrap .tab-content > div , .designs .preview-block'
    });

    const tabsSlider = new SliderCarousel({
        slider: '.designs .nav-wrap',
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

const popupBlock = () => {
    slidersConverter({
        slidersWrapper: '.popup-design-slider-wrap',
        slaidersContainer: '.popup-design-slider',
        counter: '.slider-counter',
        prevArrow: '.popup-arrow_left',
        nextArrow: '.popup-arrow_right',
        slidersConverterCb: popupSlider()
    });

    tabs({
        tabHeaderSelector: '.popup .nav-list-designs',
        tabSelector: '.designs-nav__item',
        tabContentSelector: ' .popup-design-slider-wrap .tab-content > div , .popup .popup-design-text',
        showTabClass: 'visible-content-block'
    });

    const tabsSlider = new SliderCarousel({
        slider: '.popup-dialog-design .nav-wrap',
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

const designSolutions = () => {

    togglePopup([
        ['.link-list-designs a', '.popup-design']
    ]);

    mainDesignsBlock();
    popupBlock();
};

export default designSolutions;