import $ from "jquery/dist/jquery";
import {BasePage} from "../base-page";
import {Slider} from "../partial/slider";
import {YandexMaps} from "../partial/yandex-maps";


class Index extends BasePage {
    init() {
        const slider = new Slider(this.$element.find('.js-slider'));
        const maps = new YandexMaps(this.$element.find('.js-maps'));
    }

}

const page = new Index();