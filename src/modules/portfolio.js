import SliderCarousel from './SliderCarousel';
import togglePopup from './togglePopup';

const portfolio = () => {
    togglePopup([
        ['.portfolio-slider__slide-frame', '.popup-portfolio']
    ]);


    const portfolioSliderMobile = new SliderCarousel({
        slider: '.portfolio-slider-wrap',
        main: '.portfolio-slider-mobile',
        prev: '.slider-arrow-tablet-mobile_left',
        next: '.slider-arrow-tablet-mobile_right',
        counter: '.slider-counter-responsive',
        current: '.slider-counter-content__current',
        total: '.slider-counter-content__total',
        infinity: false,
        slidesToShow: 1,
        disable: true,
        responsive: [{
            breakpoint: 575,
            slidesToShow: 1,

        }]
    });
    portfolioSliderMobile.init();

    const portfolioSlider = new SliderCarousel({
        slider: '.portfolio-slider-wrap',
        main: '.portfolio-slider',
        prev: '.slider-arrow_left-portfolio',
        next: '.slider-arrow_right-portfolio',
        infinity: false,
        slidesToShow: 3,
        responsive: [

            {
                breakpoint: 1140,
                slidesToShow: 2,
            },
            {
                breakpoint: 900,
                slidesToShow: 1,
            },
            {
                breakpoint: 575,
                slidesToShow: 1,
                disable: true
            }
        ]
    });
    portfolioSlider.init();

    const getOffset = el => {
        const parent = el.parentNode.getBoundingClientRect(),
            current = el.getBoundingClientRect();

        return {
            bottom: Math.abs(parent.bottom - current.bottom),
            left: Math.abs(parent.left - current.left),
            right: Math.abs(parent.right - current.right),
            top: Math.abs(parent.top - current.top),
        };
    };

    const convertTime = time => parseFloat(time) * 1000;

    const popupPortfolioChange = slider => () => {
        const texts = document.querySelectorAll('.popup-portfolio .popup-portfolio-text'),
            slide = slider.options.position;
        texts.forEach((el, i) => {
            if (i !== slide && el.style.display !== '') {
                const styles = getComputedStyle(el),
                    time = convertTime(styles.transitionDuration),
                    position = getOffset(el);

                console.log(styles);

                el.style.position = 'absolute';
                el.style.top = (position.top - parseFloat(styles.marginTop)) + 'px';
                el.style.right = position.right + 'px';
                el.classList.remove('popup-portfolio-text--show');

                setTimeout(() => {
                    el.style.display = '';
                    el.style.position = '';
                    el.style.right = '';
                    el.style.top = '';
                }, time);

            }
        });
        texts[slide].style.display = 'block';
        texts[slide].classList.add('popup-portfolio-text--show');
    };

    const popupPortfolioSlider = new SliderCarousel({
        slider: '.popup-portfolio-slider-wrap',
        main: '.popup-portfolio-slider',
        prev: '.popup-arrow_left',
        next: '.popup-arrow_right',
        counter: '.slider-counter',
        current: '.slider-counter-content__current',
        total: '.slider-counter-content__total',
        infinity: false,
        slidesToShow: 1
    });
    popupPortfolioSlider.afterChange = popupPortfolioChange(popupPortfolioSlider);
    popupPortfolioSlider.init();

};

export default portfolio;