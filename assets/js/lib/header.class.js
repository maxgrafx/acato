export default class Header {
    constructor(_target, _file) {
        this.target = _target;
        let jqxhr = jQuery.getJSON("header.data.json")
            .done((_data) => this._jsonLoaded(_data))
            .fail(() => this._jsonFailed())
            .always(() => this._jsonAlways());
    }
    _jsonFailed() {}
    _jsonAlways() {}
    _jsonLoaded(_data) {
        _data.push(_data[0]);
        this.target.style.width = (_data.length * 100) + '%';
        this.timeline = new TimelineMax({ repeat: -1, paused: true });
        let html = '';
        let percent = Math.floor(Number(100 / _data.length).toFixed(6) * 100000) / 100000;
        _data.forEach((_item, _index) => html += `
            <li style="width:${percent}%;background-image:url(${_item.img})">
                <div class="container h-100">
                    <div class="row flex-items-xs-middle h-100">
                        <div class="col-xs-12 text-xs-center text-white">
                            <h2 class="display-1">${_item.name}</h2>
                        </div>
                    </div>
                </div>
            </li>
        `);
        this.target.innerHTML = html;
        this._initTimeline(_data);
    }
    get _slides() {
        if (!this.slideNodes) {
            this.slideNodes = [].slice.call(this.target.querySelectorAll('li'));
        }
        return this.slideNodes;

    }
    _initTimeline(_data) {
        let slides = this._slides.slice();
        slides.pop();
        slides.forEach((_item, _index) => this._slide(_item, _index));
        this.timeline.play();
    }
    _slide(_item, _index) {
        let length = this._slides.length;
        let percent = 100 / length;
        let x = '-=' + String(percent) + '%';
        this.timeline.add(TweenLite.to(this.target, 1, { x: x, delay: 5 }));
    }
}
