import Input from '../lib/input.class';
export default class From{
	constructor(_target){
		this.target = _target;
		this.inputs = this.target.querySelectorAll('[data-type]');
		this.submitBtn = this.target.querySelector('input[type="submit"]');
		this._initInputs();
		this.target.addEventListener('submit', (_event) => this._submitEvent(_event));
	}
	_initInputs(){
		for (var i = this.inputs.length - 1; i >= 0; i--) {
			let input = new Input(this.inputs[i]);
			this.inputs[i] = input;
			input.on('input:change', () => this._validateForm());
		}
	}
	_validateForm(){
		// console.log('test');
	}
	_submitEvent(_event){

	}
}