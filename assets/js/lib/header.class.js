export default class Header {
    constructor(_target, _file) {
        this.target = _target;
        // console.log(jQuery.getJSON);
        jQuery.getJSON(_file, () => this._jsonLoaded()).done(() => this._jsonLoaded())
            .fail(function() {
                console.log("error");
            })
            .always(function() {
                console.log("complete");
            });
    }
    _jsonLoaded(_data) {
        console.log(_data);
    }
}
