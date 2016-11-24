/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _form = __webpack_require__(1);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _header = __webpack_require__(3);
	
	var _header2 = _interopRequireDefault(_header);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var form = new _form2.default(document.querySelector('form'));
	var header = new _header2.default(document.querySelector('header .slider-container'), 'header.data.json');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _input = __webpack_require__(2);
	
	var _input2 = _interopRequireDefault(_input);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var From = function () {
		function From(_target) {
			_classCallCheck(this, From);
	
			this.target = _target;
			this.inputs = this.target.querySelectorAll('[data-type]');
			this._initInputs();
		}
	
		_createClass(From, [{
			key: '_initInputs',
			value: function _initInputs() {
				for (var i = this.inputs.length - 1; i >= 0; i--) {
					this.inputs[i] = new _input2.default(this.inputs[i]);
				}
			}
		}]);
	
		return From;
	}();
	
	exports.default = From;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Input = function () {
	    function Input(_target) {
	        var _this = this;
	
	        _classCallCheck(this, Input);
	
	        this.target = _target;
	        this.required = this.target.hasAttribute('data-required');
	        this.type = this.target.getAttribute('data-type');
	        this.label = this.target.nextElementSibling;
	        this.target.addEventListener('change', function () {
	            return _this._change();
	        });
	        this.target.addEventListener('input', function () {
	            return _this._change();
	        });
	    }
	
	    _createClass(Input, [{
	        key: '_change',
	        value: function _change(_event) {
	            if (this.required) {
	                var valid = true;
	                switch (this.type) {
	                    case 'text':
	                        valid = this.value !== '';
	                        break;
	                    case 'email':
	                        valid = this.value !== '' && this._emailRegex.test(this.value);
	                        break;
	                    case 'phone':
	                        valid = this.value !== '' && this._phoneRegex.test(this.value);
	                        break;
	                }
	                if (!valid) {
	                    this.label.classList.add('invalid');
	                } else {
	                    this.label.classList.remove('invalid');
	                }
	            }
	        }
	    }, {
	        key: '_emailRegex',
	        get: function get() {
	            return (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
	            );
	        }
	    }, {
	        key: '_phoneRegex',
	        get: function get() {
	            return (/^\+?\d{10}$/
	            );
	        }
	    }, {
	        key: 'value',
	        get: function get() {
	            return this.target.value;
	        }
	    }]);
	
	    return Input;
	}();
	
	exports.default = Input;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Header = function () {
	    function Header(_target, _file) {
	        var _this = this;
	
	        _classCallCheck(this, Header);
	
	        this.target = _target;
	        var jqxhr = jQuery.getJSON("header.data.json").done(function (_data) {
	            return _this._jsonLoaded(_data);
	        }).fail(function () {
	            return _this._jsonFailed();
	        }).always(function () {
	            return _this._jsonAlways();
	        });
	    }
	
	    _createClass(Header, [{
	        key: '_jsonFailed',
	        value: function _jsonFailed() {}
	    }, {
	        key: '_jsonAlways',
	        value: function _jsonAlways() {}
	    }, {
	        key: '_jsonLoaded',
	        value: function _jsonLoaded(_data) {
	            _data.push(_data[0]);
	            this.target.style.width = _data.length * 100 + '%';
	            this.timeline = new TimelineMax({ repeat: -1, paused: true });
	            var html = '';
	            var percent = Math.floor(Number(100 / _data.length).toFixed(6) * 100000) / 100000;
	            _data.forEach(function (_item, _index) {
	                return html += '\n            <li style="width:' + percent + '%;background-image:url(' + _item.img + ')">\n                <div class="container h-100">\n                    <div class="row flex-items-xs-middle h-100">\n                        <div class="col-xs-12 text-xs-center text-white">\n                            <h2 class="display-1">' + _item.name + '</h2>\n                        </div>\n                    </div>\n                </div>\n            </li>\n        ';
	            });
	            this.target.innerHTML = html;
	            this._initTimeline(_data);
	        }
	    }, {
	        key: '_initTimeline',
	        value: function _initTimeline(_data) {
	            var _this2 = this;
	
	            var slides = this._slides.slice();
	            var lastSlide = slides.pop();
	            lastSlide.innerHTML = '';
	            slides.forEach(function (_item, _index) {
	                return _this2._slide(_item, _index);
	            });
	            this.timeline.play();
	        }
	    }, {
	        key: '_slide',
	        value: function _slide(_item, _index) {
	            var length = this._slides.length;
	            var percent = 100 / length;
	            var x = '-=' + String(percent) + '%';
	            var title = _item.querySelector('h2');
	            var slideTween = TweenLite.to(this.target, 1, { x: x, delay: 2, ease: Cubic.easeOut });
	            var titleTween = TweenLite.fromTo(title, 1, { y: "+=100", alpha: 0 }, { y: 0, alpha: 1, delay: 0, ease: Cubic.easeOut });
	            this.timeline.add([titleTween, slideTween], "+=0", 'sequence', 0.5);
	        }
	    }, {
	        key: '_slides',
	        get: function get() {
	            if (!this.slideNodes) {
	                this.slideNodes = [].slice.call(this.target.querySelectorAll('li'));
	            }
	            return this.slideNodes;
	        }
	    }]);
	
	    return Header;
	}();
	
	exports.default = Header;

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map