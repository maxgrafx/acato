export default class Header {
    constructor(_target, _file) {
        this.target = _target;
        let jqxhr = jQuery.getJSON("header.data.json")
            .done((_data) => this._jsonLoaded(_data))
            .fail(() => this._jsonFailed())
            .always(() => this._jsonAlways());
        window.addEventListener('resize', (_event) => this._resize(_event));
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
							<div>
								<h2 class="display-1">
									<span class="title">${_item.name}</span>
									<span class="line"></span>
								</h2>
							</div>
							<div>
								<p>
									<span class="title">${_item.desc}</span>
									<span class="line"></span>
								</p>
							</div>
                        </div>
                    </div>
                </div>
            </li>
        `);
        this.target.innerHTML = html;
        this._initTimeline(0);
    }
    get _slides() {
        if (!this.slideNodes) {
            this.slideNodes = [].slice.call(this.target.querySelectorAll('li'));
        }
        return this.slideNodes;

    }
    _initTimeline(_offset) {
        let slides = this._slides.slice();
        let lastSlide = slides.pop();
        lastSlide.innerHTML = '';
        slides.forEach((_item, _index) => this._slide(_item, _index));
        TweenLite.set(this.target, { clearProps: 'x' });
        this.timeline.play(_offset);
    }
    _slide(_item, _index) {
        let length = this._slides.length;
        let percent = 100 / length;
        let x = '-=' + String(percent) + '%';
        let title = _item.querySelector('h2 .title');
        let titleLine = _item.querySelector('h2 .line');
        let desc = _item.querySelector('p .title');
        let descLine = _item.querySelector('p .line');
        TweenLite.set([desc, title, titleLine, descLine], { clearProps: 'all' });
        let slideTween = TweenLite.to(this.target, 2, { x: x, delay: 5, ease: Cubic.easeInOut });
        let titleLineTween = TweenLite.from(titleLine, .2, { width: 0, delay: 0, ease: Cubic.easeInOut });
        let titleTween = TweenLite.from(title, .1, { alpha: 0, delay: 0, ease: Cubic.easeOut });
        let titleLineTween2 = TweenLite.to(titleLine, .4, { left: '100%', width: 0, delay: 0, ease: Cubic.easeInOut });
        let descLineTween = TweenLite.from(descLine, .2, { width: 0, delay: 0, ease: Cubic.easeInOut });
        let descTween = TweenLite.from(desc, .1, { alpha: 0, delay: 0, ease: Cubic.easeOut });
        let descLineTween2 = TweenLite.to(descLine, .4, { left: '100%', width: 0, delay: 0, ease: Cubic.easeInOut });
        this.timeline.add([slideTween], "+=0", 'sequence', 0);
        this.timeline.add([titleLineTween, titleTween, titleLineTween2], "-=7", 'sequence', 0);
        this.timeline.add([descLineTween, descTween, descLineTween2], "-=6.9", 'sequence', 0);
    }
    _resize() {
    	let offset = this.timeline.time();
    	console.log(offset);
        this.timeline.clear();
        this.timeline.kill();
        this.timeline = new TimelineMax({ repeat: -1, paused: true });
        this._initTimeline(offset);
    }
}
