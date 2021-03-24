class SliderCarousel {
    constructor({
        slider,
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 3,
        counter = false,
        current = false,
        total = false,
        disable = false,
        afterChange = () => {},
        responsive = []
    }) {
        if (!main || !slider) {
            console.warn('slider-carouser: Необходимо 2 свойства: "slider", "main"');
        }
        this.slider = document.querySelector(slider);
        this.main = document.querySelector(main);
        this.isWrap = !!wrap;
        this.wrap = document.querySelector(wrap) || document.createElement('div');
        this.next = this.slider.querySelector(next);
        this.prev = this.slider.querySelector(prev);

        this.key = this.generateKey();
        this.id = SliderCarousel.count;

        this.counter = this.slider.querySelector(counter);
        this.current = this.slider.querySelector(current);
        this.total = this.slider.querySelector(total);

        if (!this.wrap.children.length) {
            this.wrap.append(...this.main.children);
        }
        this.slides = new Set([...this.wrap.children]);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            disable,
            widthSlide: this.slideWidth(),
            maxPosition: this.slides.size - this.slidesToShow
        };
        this.responsive = responsive;
        this.afterChange = afterChange;
    }

    static get count() {
        SliderCarousel._counter = (SliderCarousel._counter || 0) + 1;
        return SliderCarousel._counter;
    }


    currentPos(pos) {
        this.options.position = pos;

        if (this.options.position > this.options.maxPosition) {
            this.options.position = 0;
        }
        if (this.options.position < 0) {
            this.options.position = this.options.maxPosition;
        }
        this.goToposition();

    }

    init() {

        this.addGloClass();
        this.addStyle();

        if (this.prev && this.next) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        if (this.responsive) {
            this.responseInit();
        }
        this.showArrows();
    }



    generateKey() {
        return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        if (!this.main.querySelector('.glo-slider__wrap')) {
            this.main.append(this.wrap);
        }
        if (!this.isWrap) {
            this.wrap.append(...this.slides);
        }
        [...this.slides].forEach(el => el.classList.add('glo-slider__item', `glo-slider__item--${this.key}`));
    }

    removeGloClass() {
        this.main.classList.remove('glo-slider');
        this.wrap.classList.remove('glo-slider__wrap');
        [...this.slides].forEach(el => el.classList.remove('glo-slider__item', `glo-slider__item--${this.key}`));

        if (!this.isWrap) {
            this.wrap.textContent = '';
            this.main.textContent = '';
            this.main.append(...this.slides);
        }

        this.next.classList.remove('show-arrow', 'hide-arrow');
        this.prev.classList.remove('show-arrow', 'hide-arrow');
    }

    addStyle() {
        let style = document.getElementById('sliderCarousel-style');
        let styleOwn = document.getElementById(`sliderCarousel-style-${this.id}`);

        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        if (!styleOwn) {
            styleOwn = document.createElement('style');
            styleOwn.id = `sliderCarousel-style-${this.id}`;
        }
        style.textContent = `
            .glo-slider {
                overflow: hidden !important;
                display: block !important;
            }
            .glo-slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .glo-slider__item {
                display: flex !important;
                align-items: center !important;
                /*flex: 0 0 ${this.options.widthSlide}% !important;*/
                margin: auto 0 !important;
                justify-content: center !important;
                /*flex-basis: ${this.options.widthSlide}% !important;*/
                /*flex: 0 0 ${this.options.widthSlide}% !important;*/
                overflow: visible !important;
            }
        `;
        document.head.append(style);
        styleOwn.textContent = `        
            .glo-slider__item--${this.key} {
                flex: 0 0 ${this.options.widthSlide}% !important;
                width: ${this.options.widthSlide}% !important;
                max-width: ${this.options.widthSlide}% !important;
            }
        `;

        document.head.append(styleOwn);
    }

    controlSlider() {
        this.next.addEventListener('click', () => { this.nextSlider(); });
        this.prev.addEventListener('click', () => { this.prevSlider(); });
    }

    addArrow() {
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';

        this.main.append(this.prev);
        this.main.append(this.next);

        const style = document.createElement('style');

        style.textContent = `        
            .glo-slider__prev,
            .glo-slider__next {
                margin: 0 10px;
                border: 20px solid transparent;
                background: transparent;
                outline: none
            }
            .glo-slider__next {
                border-left-color: #19b5fe
            }
            .glo-slider__prev {
                border-right-color: #19b5fe
            }
            .glo-slider__prev:hover,
            .glo-slider__next:hover,
            .glo-slider__prev:focus,
            .glo-slider__next:focus {
                background: transparent;
                outline: none;
            }
        `;
        document.head.append(style);
    }

    nextSlider() {
        if (this.options.infinity || this.options.position < this.slides.size - this.slidesToShow) {
            this.currentPos(++this.options.position);
        }
    }

    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {

            this.currentPos(--this.options.position);
        }
    }

    goToposition() {
        this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        this.showArrows();
    }

    arrowShow(arrow) {
        arrow.classList.add('show-arrow');
        arrow.classList.remove('hide-arrow');
    }

    arrowHide(arrow) {
        arrow.classList.add('hide-arrow');
        arrow.classList.remove('show-arrow');
    }

    showArrows() {
        if (!this.options.infinity && !this.options.disable) {
            if (this.options.position > 0) {
                this.arrowShow(this.prev);
            } else {
                this.arrowHide(this.prev);
            }

            if (this.options.position < this.options.maxPosition) {
                this.arrowShow(this.next);
            } else {
                this.arrowHide(this.next);
            }
        } else if (!this.options.disable) {
            this.arrowShow(this.prev);
            this.arrowShow(this.next);
        }
        this.setCounter();
        this.afterChange();
    }

    setCounter() {
        if (this.counter && this.current) {
            this.current.textContent = this.options.position + 1;
        }
        if (this.counter && this.total) {
            this.total.textContent = this.options.maxPosition + 1;
        }
    }

    slideWidth() {
        return Math.floor(100 / this.slidesToShow * 100) / 100;
    }

    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const disableDefault = this.options.disable;
        const allResponse = this.responsive.map(i => i.breakpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse) {
                for (let i = 0; i < allResponse.length; i++) {
                    if (widthWindow < allResponse[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.options.disable = !!this.responsive[i].disable;
                        this.options.widthSlide = this.slideWidth();
                        this.options.maxPosition = this.slides.size - this.slidesToShow;
                        if (!this.options.disable) {
                            this.addGloClass();
                            this.addStyle();
                        } else {
                            this.removeGloClass();
                        }
                    }

                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.options.disable = disableDefault;
                this.options.widthSlide = this.slideWidth();
                this.options.maxPosition = this.slides.size - this.slidesToShow;
                if (!this.options.disable) {
                    this.addGloClass();
                    this.addStyle();
                } else {
                    this.removeGloClass();
                }
            }
        };
        checkResponse();

        window.addEventListener('resize', checkResponse);
    }
}

export default SliderCarousel;