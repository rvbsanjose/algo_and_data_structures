/*
	Using a Stack data structure, create a method balancedSymbols that returns a boolean value
	for the string being passed in.

	For example
		1. balancedSymbols('{{([][])}()}') returns true
		2. balancedSymbols('[{()]') returns false
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

var balancedSymbols = function (str) {
	var matches = { '{': '}', '(': ')', '[': ']' };
	var stack = new Stack();
	for (var i = 0; i < str.length; i++) {
		var current = str[i];
		if (matches[current])
			stack.push(current);
		else {
			var popped = stack.pop();
			if (matches[popped] !== current) return false;
		}
	}

	return true;
};