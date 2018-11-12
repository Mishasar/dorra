import $ from "jquery/dist/jquery";

class BasePartial {
    constructor(element) {
        this.$element = $(element);
        this.init();
    }

    init() {}
}

export {BasePartial};