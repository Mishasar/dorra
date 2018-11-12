import $ from "jquery/dist/jquery";
import {BasePage} from "../base-page";
import {YandexMaps} from "../partial/yandex-maps";


class Index extends BasePage {
    init() {
        const maps = new YandexMaps(this.$element.find('.js-maps'));
    }

}

const page = new Index();