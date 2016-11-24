import Form from '../lib/form.class';
import Header from '../lib/header.class';
let form = new Form(document.querySelector('form'));
let header = new Header(document.querySelector('header .slider-container'), 'header.data.json');

function is_touch_device() {
    return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}
if (is_touch_device()) {
	document.querySelector('html').classList.add('is-touch-device');
}
