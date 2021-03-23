!function(){"use strict";var t=function(t){var e=t.timing,i=t.draw,o=t.duration,n=t.element,r=performance.now();requestAnimationFrame((function t(s){var a=(s-r)/o;a>1&&(a=1),a<0&&(a=0);var l=e(a);i(l,n),a<1&&requestAnimationFrame(t)}))},e=function(t){return 1-Math.sin(Math.acos(t))},i=function(t,e){window.scrollTo(0,(e.to-e.from)*t+e.from)};function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}var n,r=function(t,e){e.style.opacity=t,e.style.visibility=t?"visible":""},s=(n=0,function(){return++n});const a=function(i){var n=s();i&&i instanceof Array&&function(t){t.forEach((function(t){var e,i,n=(i=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var i=[],o=!0,n=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done)&&(i.push(s.value),!e||i.length!==e);o=!0);}catch(t){n=!0,r=t}finally{try{o||null==a.return||a.return()}finally{if(n)throw r}}return i}}(e,i)||function(t,e){if(t){if("string"==typeof t)return o(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?o(t,e):void 0}}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=n[0],s=n[1];r.split(",").forEach((function(t){var e=t.trim();if(e){var i=document.querySelectorAll(e);i&&"string"==typeof s&&i.forEach((function(t){return t.dataset.popup=s}))}}))}))}(i);var a=function(){return window.innerWidth<0};1===n&&document.addEventListener("click",(function(i){var o=i.target;if(!o.closest(".close")&&(o.closest(".popup-dialog")||o.closest(".popup-dialog-transparency"))||o.closest(".popup-dialog-menu")||!o.closest(".popup")||function(i){var o;a()?(i.style.display="none",i.style.opacity=""):t({element:i,duration:500,timing:(o=e,function(t){return o(1-t)}),draw:r})}(o.closest(".popup")),o.closest("[data-popup]")){var n=o.closest("[data-popup]").dataset.popup,s=n?document.querySelector(n):null;document.body.dispatchEvent(new Event("click",{bubbles:!0})),s&&function(i){a()?(i.style.display="block",i.style.opacity=""):t({element:i,duration:500,timing:e,draw:r})}(s)}}))};function l(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return c(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?c(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,o=new Array(e);i<e;i++)o[i]=t[i];return o}function d(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}const p=function(){function t(e){var i,o=e.slider,n=e.main,r=e.wrap,s=e.next,a=e.prev,c=e.infinity,d=void 0!==c&&c,p=e.position,u=void 0===p?0:p,h=e.slidesToShow,f=void 0===h?3:h,m=e.counter,y=void 0!==m&&m,v=e.current,w=void 0!==v&&v,g=e.total,b=void 0!==g&&g,S=e.disable,_=void 0!==S&&S,x=e.afterChange,k=void 0===x?function(){}:x,T=e.responsive,C=void 0===T?[]:T;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),n&&o||console.warn('slider-carouser: Необходимо 2 свойства: "slider", "main"'),this.options={},this.slider=document.querySelector(o),this.main=document.querySelector(n),this.isWrap=!!r,this.wrap=document.querySelector(r)||document.createElement("div"),this.next=this.slider.querySelector(s),this.prev=this.slider.querySelector(a),this.key=this.generateKey(),this.id=t.count,this.counter=this.slider.querySelector(y),this.current=this.slider.querySelector(w),this.total=this.slider.querySelector(b),this.wrap.children.length||(i=this.wrap).append.apply(i,l(this.main.children)),this.slides=new Set(l(this.wrap.children)),this.slidesToShow=f,this.options={position:u,infinity:d,disable:_,widthSlide:this.slideWidth(),maxPosition:this.slides.size-this.slidesToShow},this.responsive=C,this.afterChange=k}var e,i,o;return e=t,o=[{key:"count",get:function(){return t._counter=(t._counter||0)+1,t._counter}}],(i=[{key:"currentPos",value:function(t){this.options.position=t,this.options.position>this.options.maxPosition&&(this.options.position=0),this.options.position<0&&(this.options.position=this.options.maxPosition),this.goToposition()}},{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit(),this.showArrows()}},{key:"generateKey",value:function(){return Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15)}},{key:"addGloClass",value:function(){var t,e=this;this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap"),this.main.querySelector(".glo-slider__wrap")||this.main.append(this.wrap),this.isWrap||(t=this.wrap).append.apply(t,l(this.slides)),l(this.slides).forEach((function(t){return t.classList.add("glo-slider__item","glo-slider__item--".concat(e.key))}))}},{key:"removeGloClass",value:function(){var t,e=this;this.main.classList.remove("glo-slider"),this.wrap.classList.remove("glo-slider__wrap"),l(this.slides).forEach((function(t){return t.classList.remove("glo-slider__item","glo-slider__item--".concat(e.key))})),this.isWrap||(this.wrap.textContent="",this.main.textContent="",(t=this.main).append.apply(t,l(this.slides))),this.next.classList.remove("show-arrow","hide-arrow"),this.prev.classList.remove("show-arrow","hide-arrow")}},{key:"addStyle",value:function(){var t=document.getElementById("sliderCarousel-style"),e=document.getElementById("sliderCarousel-style-".concat(this.id));t||((t=document.createElement("style")).id="sliderCarousel-style"),e||((e=document.createElement("style")).id="sliderCarousel-style-".concat(this.id)),t.textContent="\n            .glo-slider {\n                overflow: hidden !important;\n                display: block !important;\n            }\n            .glo-slider__wrap {\n                display: flex !important;\n                transition: transform 0.5s !important;\n                will-change: transform !important;\n            }\n            .glo-slider__item {\n                display: flex !important;\n                align-items: center !important;\n                /*flex: 0 0 ".concat(this.options.widthSlide,"% !important;*/\n                margin: auto 0 !important;\n                justify-content: center !important;\n                /*flex-basis: ").concat(this.options.widthSlide,"% !important;*/\n                /*flex: 0 0 ").concat(this.options.widthSlide,"% !important;*/\n                overflow: visible !important;\n            }\n        "),document.head.append(t),e.textContent="        \n            .glo-slider__item--".concat(this.key," {\n                flex: 0 0 ").concat(this.options.widthSlide,"% !important;\n                width: ").concat(this.options.widthSlide,"% !important;\n                max-width: ").concat(this.options.widthSlide,"% !important;\n            }\n        "),document.head.append(e)}},{key:"controlSlider",value:function(){var t=this;this.next.addEventListener("click",(function(){t.nextSlider()})),this.prev.addEventListener("click",(function(){t.prevSlider()}))}},{key:"addArrow",value:function(){this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.main.append(this.prev),this.main.append(this.next);var t=document.createElement("style");t.textContent="        \n            .glo-slider__prev,\n            .glo-slider__next {\n                margin: 0 10px;\n                border: 20px solid transparent;\n                background: transparent;\n                outline: none\n            }\n            .glo-slider__next {\n                border-left-color: #19b5fe\n            }\n            .glo-slider__prev {\n                border-right-color: #19b5fe\n            }\n            .glo-slider__prev:hover,\n            .glo-slider__next:hover,\n            .glo-slider__prev:focus,\n            .glo-slider__next:focus {\n                background: transparent;\n                outline: none;\n            }\n        ",document.head.append(t)}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.slides.size-this.slidesToShow)&&this.currentPos(++this.options.position)}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&this.currentPos(--this.options.position)}},{key:"goToposition",value:function(){this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"),this.showArrows()}},{key:"arrowShow",value:function(t){t.classList.add("show-arrow"),t.classList.remove("hide-arrow")}},{key:"arrowHide",value:function(t){t.classList.add("hide-arrow"),t.classList.remove("show-arrow")}},{key:"showArrows",value:function(){this.options.infinity||this.options.disable?this.options.disable||(this.arrowShow(this.prev),this.arrowShow(this.next)):(this.options.position>0?this.arrowShow(this.prev):this.arrowHide(this.prev),this.options.position<this.options.maxPosition?this.arrowShow(this.next):this.arrowHide(this.next)),this.setCounter(),this.afterChange()}},{key:"setCounter",value:function(){this.counter&&this.current&&(this.current.textContent=this.options.position+1),this.counter&&this.total&&(this.total.textContent=this.options.maxPosition+1)}},{key:"slideWidth",value:function(){return Math.floor(100/this.slidesToShow*100)/100}},{key:"responseInit",value:function(){var t=this,e=this.slidesToShow,i=this.options.disable,o=this.responsive.map((function(t){return t.breakpoint})),n=Math.max.apply(Math,l(o)),r=function(){var r=document.documentElement.clientWidth;if(r<n)for(var s=0;s<o.length;s++)r<o[s]&&(t.slidesToShow=t.responsive[s].slidesToShow,t.options.disable=!!t.responsive[s].disable,t.options.widthSlide=t.slideWidth(),t.options.maxPosition=t.slides.size-t.slidesToShow,t.options.disable?t.removeGloClass():(t.addGloClass(),t.addStyle()));else t.slidesToShow=e,t.options.disable=i,t.options.widthSlide=t.slideWidth(),t.options.maxPosition=t.slides.size-t.slidesToShow,t.options.disable?t.removeGloClass():(t.addGloClass(),t.addStyle())};r(),window.addEventListener("resize",r)}}])&&d(e.prototype,i),o&&d(e,o),t}();var u,h,f,m,y,v,w,g;document.querySelector(".header-contacts__arrow").addEventListener("click",(function(t){t.target.closest(".header-contacts").classList.toggle("openned")})),w=document.querySelector(".popup-dialog-menu"),g=function(o){var n,r=(o="A"===o.tagName?o:o.querySelector("a")).getAttribute("href")||!1,s=!!r&&document.querySelector(r);if(s){this.preventDefault();var a={from:document.documentElement.scrollTop,to:s.getBoundingClientRect().top-document.body.getBoundingClientRect().top};t({element:a,duration:1e3,timing:(n=e,function(t){return t<.5?n(2*t)/2:(2-n(2*(1-t)))/2}),draw:i})}},document.addEventListener("click",(function(t){var e=t.target;!e.closest(".close-menu")&&e.closest(".popup-menu")||(w.style.transform=""),e.classList.contains("menu__icon")&&(w.style.transform="translate3d(0, 0, 0)"),e.closest("a")&&e.closest("a").getAttribute("href").length>1&&"#"===e.closest("a").getAttribute("href")[0]&&(g.bind(t)(e.closest("a")),w.style.transform="")})),a([[".link-list-menu a, .link-list-repair a",".popup-repair-types"],[".link-privacy",".popup-privacy"],[".director button, .services button",".popup-consultation"]]),h={selector:"string"==typeof u?u:".accordion",header:"h2",activeClass:"msg-active",firstOpenned:!0,oneOpenned:!0},f=u=u instanceof Object?Object.assign(h,u):h,m=f.selector,y=f.header,v=f.activeClass,document.querySelectorAll(m).forEach((function(t){var e=t.querySelectorAll(y);u.firstOpenned&&(e.forEach((function(t){t.classList.remove(v)})),e[0].classList.add(v)),t.addEventListener("click",(function(e){e.target.closest(y)&&function(t,e){u.oneOpenned&&!e.classList.contains(v)&&t.querySelectorAll(".".concat(v)).forEach((function(t){return t.classList.remove(v)})),e.classList.toggle(v)}(t,e.target.closest(y))}))})),function(){a([[".portfolio-slider__slide-frame",".popup-portfolio"]]),new p({slider:".portfolio-slider-wrap",main:".portfolio-slider-mobile",prev:".slider-arrow-tablet-mobile_left",next:".slider-arrow-tablet-mobile_right",counter:".slider-counter-responsive",current:".slider-counter-content__current",total:".slider-counter-content__total",infinity:!1,slidesToShow:1,disable:!0,responsive:[{breakpoint:575,slidesToShow:1}]}).init(),new p({slider:".portfolio-slider-wrap",main:".portfolio-slider",prev:".slider-arrow_left-portfolio",next:".slider-arrow_right-portfolio",infinity:!1,slidesToShow:3,responsive:[{breakpoint:1140,slidesToShow:2},{breakpoint:900,slidesToShow:1},{breakpoint:575,slidesToShow:1,disable:!0}]}).init();var t,e=new p({slider:".popup-portfolio-slider-wrap",main:".popup-portfolio-slider",prev:".popup-arrow_left",next:".popup-arrow_right",counter:".slider-counter",current:".slider-counter-content__current",total:".slider-counter-content__total",infinity:!1,slidesToShow:1});e.afterChange=(t=e,function(){var e=document.querySelectorAll(".popup-portfolio .popup-portfolio-text"),i=t.options.position;e.forEach((function(t,e){if(e!==i&&""!==t.style.display){var o=getComputedStyle(t),n=function(t){return 1e3*parseFloat(t)}(o.transitionDuration),r=function(t){var e=t.parentNode.getBoundingClientRect(),i=t.getBoundingClientRect();return{bottom:Math.abs(e.bottom-i.bottom),left:Math.abs(e.left-i.left),right:Math.abs(e.right-i.right),top:Math.abs(e.top-i.top)}}(t);console.log(o),t.style.position="absolute",t.style.top=r.top-parseFloat(o.marginTop)+"px",t.style.right=r.right+"px",t.classList.remove("popup-portfolio-text--show"),setTimeout((function(){t.style.display="",t.style.position="",t.style.right="",t.style.top=""}),n)}})),e[i].style.display="block",e[i].classList.add("popup-portfolio-text--show")}),e.init()}(),function(){a([[".transparency-item",".popup-transparency"]]),new p({slider:".transparency-slider-wrap",main:".transparency-slider",prev:".slider-arrow_left",next:".slider-arrow_right",infinity:!1,slidesToShow:1,disable:!0,responsive:[{breakpoint:1090,slidesToShow:1}]}).init();var t=new p({slider:".popup-transparency-slider-wrap",main:".popup-transparency-slider",prev:".popup-arrow_transparency_left",next:".popup-arrow_transparency_right",counter:".slider-counter",current:".slider-counter-content__current",total:".slider-counter-content__total",infinity:!1,slidesToShow:1});t.init();var e=document.querySelectorAll(".transparency-item");document.addEventListener("click",(function(i){var o=i.target.closest(".transparency-item");o&&e.forEach((function(e,i){return e===o?t.currentPos(i):null}))}))}(),new p({slider:".reviews-slider-wrap",main:".reviews-slider",prev:".slider-arrow_left",next:".slider-arrow_right",infinity:!1,slidesToShow:1}).init(),new p({slider:".partners",main:".partners-slider",prev:".slider-arrow_left",next:".slider-arrow_right",infinity:!0,slidesToShow:3,responsive:[{breakpoint:1091,slidesToShow:2},{breakpoint:1025,slidesToShow:3},{breakpoint:641,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init()}();