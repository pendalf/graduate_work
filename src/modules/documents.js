import SliderCarousel from './SliderCarousel';
import togglePopup from './togglePopup';

const documents = () => {

    togglePopup([
        ['.transparency-item', '.popup-transparency']
    ]);

    const documentsSlider = new SliderCarousel({
        slider: '.transparency-slider-wrap',
        main: '.transparency-slider',
        prev: '.slider-arrow_left',
        next: '.slider-arrow_right',
        infinity: false,
        slidesToShow: 1,
        disable: true,
        responsive: [{
            breakpoint: 1090,
            slidesToShow: 1,

        }]
    });
    documentsSlider.init();

    const popupDocumentsSlider = new SliderCarousel({
        slider: '.popup-transparency-slider-wrap',
        main: '.popup-transparency-slider',
        prev: '.popup-arrow_transparency_left',
        next: '.popup-arrow_transparency_right',
        counter: '.slider-counter',
        current: '.slider-counter-content__current',
        total: '.slider-counter-content__total',
        infinity: false,
        slidesToShow: 1
    });
    popupDocumentsSlider.init();

    const transparencyItems = document.querySelectorAll('.transparency-item');

    document.addEventListener('click', e => {
        const transparencyItem = e.target.closest('.transparency-item');
        if (transparencyItem) {
            transparencyItems.forEach((el, i) => (el === transparencyItem ? popupDocumentsSlider.currentPos(i) : null));

        }
    });
};

export default documents;