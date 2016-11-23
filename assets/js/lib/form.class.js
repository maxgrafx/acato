import Input from '../lib/input.class';
export default class From{
	constructor(_target){
		this.target = _target;
		this.inputs = this.target.querySelectorAll('[data-type]');
		this._initInputs();
	}
	_initInputs(){
		for (var i = this.inputs.length - 1; i >= 0; i--) {
			this.inputs[i] = new Input(this.inputs[i]);
		}
	}
}