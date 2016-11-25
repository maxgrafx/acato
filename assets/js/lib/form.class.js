import Input from '../lib/input.class';
export default class From {
    constructor(_target) {
        this.target = _target;
        this.inputs = [];
        this.submitBtn = this.target.querySelector('input[type="submit"]');
        this._initInputs();
    }
    _initInputs() {
        let inputs = this.target.querySelectorAll('[data-type]');
        for (var i = inputs.length - 1; i >= 0; i--) {
            let input = new Input(inputs[i]);
            this.inputs.push(input);
            input.on('input:change', () => this._validateForm());
        }
    }
    _validateForm() {
        let valid = true;
        for (var i = this.inputs.length - 1; i >= 0; i--) {
        	if(!this.inputs[i].valid){
        		valid = false;
        		break;
        	}
        }
        if(!valid){
        	this.submitBtn.setAttribute('disabled', '');
        }else{
        	this.submitBtn.removeAttribute('disabled');
        }
    }
}
