import $ from "jquery/dist/jquery";
import {BasePartial} from "../base-partial";

class Slider extends BasePartial {

    init() {
        this.slides = this.$element.find('.slide');
        this.currentSlide = 0;
        this.slidePrevButton = this.$element.find('.js-prev');
        this.slideNextButton = this.$element.find('.js-next');
        this.points = this.$element.find('.js-point');
        
        this.slidePrevButton.on('click', () => {
            this.showSlide(this.currentSlide - 1);
        });

        this.slideNextButton.on('click', () => {
            this.showSlide(this.currentSlide + 1);
        });

        this.points.on('click', (e) => {
            const $el = $(e.target);
            this.showSlide($el.data('slide'));
        });

    }

    resetCurrentSlide() {
        const $slide = $(this.slides[this.currentSlide]);
        $slide.removeClass('show');
    }

    showSlide(id) {
        if (id < 0 || id > (this.slides.length - 1)) {
            return false;
        }

        this.resetCurrentSlide();
        this.currentSlide = id;
        this.slides[id].className = 'slide show';
    }
}

export {Slider};