import 'yandex-map-widget/dist/yandex-map-widget.css';
import mapWidjet from 'yandex-map-widget/dist/yandex-map-widget';
import $ from "jquery/dist/jquery";
import {BasePartial} from "../base-partial";

class YandexMaps extends BasePartial {

    init() {
        $.getJSON('/for-maps.json', (data) => {
            mapWidjet.loadApi()
                .then(() => {
                    mapWidjet.createMap('map', data);
                })
                .catch(error => console.error(error));
        });
    }
}

export {YandexMaps};