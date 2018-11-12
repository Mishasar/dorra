import $ from "jquery/dist/jquery";

class BasePage {
    constructor(element) {
        this.$element = $('body');
        this.init();
    }
}

export {BasePage};