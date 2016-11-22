import Point from '../lib/point';
export default class Test {
    constructor(){
    	this.point = new Point(101, 50);
    	console.log(this.point);
    }
    get center(){
    	return this.point;
    }
}

