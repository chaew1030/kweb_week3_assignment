function Calc(){
	this.mem = 0;
}

var calc = new Calc();

calc.add = function(a, b){
	this.mem = a + b;
	return this.mem;
}

calc.subtract = function(a, b){
	this.mem = a - b;
	return this.mem;
}

calc.multiply = function(a, b){
	this.mem = a * b;
	return this.mem;
}

calc.divide = function(a, b){
	this.mem = a / b;
	return this.mem;
}

calc.memory = function(a, b){
	return this.mem;
}

module.exports = calc;
