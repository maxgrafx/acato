export default class Input {
    constructor(_target) {
        this.target = _target;
        this.required = this.target.hasAttribute('data-required');
        this.type = this.target.getAttribute('data-type');
        this.label = this.target.nextElementSibling;
        this.target.addEventListener('change', () => this._change());
        this.target.addEventListener('input', () => this._change());
    }
    get _emailRegex() {
        return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    }
    get _phoneRegex() {
        return /^\+?\d{10}$/;
    }
    get value(){
    	return this.target.value;
    }
    _change(_event) {
        if (this.required) {
            let valid = true;
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
}
