/*
	http://interactivepython.org/runestone/static/pythonds/BasicDS/SimpleBalancedParentheses.html
	Using a Stack data structure, create a method balancedParenthesis that returns a boolean value
	for the string being passed in.

	For example
		1. balancedParenthesis('((()))') returns true
		2. balancedParenthesis('(()') returns false
*/

var Stack = function () {
	this.counter = 0;
	this.storage = {};
};

Stack.prototype.push = function (value) {
	this.storage[this.counter] = value;
	this.counter++;
};

Stack.prototype.peek = function () {
	return this.storage[this.counter-1];
};

Stack.prototype.isEmpty = function () {
	return this.counter === 0;
};

Stack.prototype.size = function () {
	return this.counter;
};

Stack.prototype.pop = function () {
	this.counter--;
	var value = this.storage[this.counter];
	delete this.storage[this.counter];
	return value;
};

var balancedParenthesis = function (str) {
	var stack = new Stack();
	for (var i = 0; i < str.length; i++) {
		var current = str[i];
		if (current === '(') stack.push(str[i]);
		if (current === ')') stack.pop();
	}

	return stack.isEmpty() ? true : false
};