const slidersConverter = ({
    slidersWrapper,
    slaidersContainer,
    counter = false,
    prevArrow = false,
    nextArrow = false,
    slidersConverterCb = () => {}
}) => {
    const slidersWrapperEl = document.querySelector(slidersWrapper),
        slaidersContainerel = slidersWrapperEl.querySelector(slaidersContainer),
        sliders = slaidersContainerel.children,
        counterEl = slidersWrapperEl.querySelector(counter),
        prevArrowEl = slidersWrapperEl.querySelector(prevArrow),
        nextArrowEl = slidersWrapperEl.querySelector(nextArrow),
        tabContent = document.createElement('div');

    tabContent.className = 'tab-content';

    [...sliders].forEach((el, i) => {
        const wrap = document.createElement('div'),
            slider = document.createElement('div'),
            wrapClass = `slider-wrap-${i}`,
            sliderClass = slaidersContainer.substring(1);

        wrap.className = wrapClass;
        slider.className = sliderClass;
        wrap.append(slider, counterEl.cloneNode(true), prevArrowEl.cloneNode(true), nextArrowEl.cloneNode(true));
        slider.append(...el.children);
        tabContent.append(wrap);

        setTimeout(() => {
            slidersConverterCb({ wrapClass, sliderClass });
        }, 0);


    });

    slidersWrapperEl.prepend(tabContent);
    slaidersContainerel.remove();
    counterEl.remove();
    prevArrowEl.remove();
    nextArrowEl.remove();
};

export default slidersConverter;