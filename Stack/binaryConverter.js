/*
  Using a Stack data structure, create a method binaryConverter that returns a binary
  representation of a base 10 number.

For example
  1. binaryConverter(42) returns 101010
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

var binaryConverter = function (num) {
  var stack = new Stack();
  var recurse = function (n) {
    if (n <= 0) return;
    var remain = n % 2;
    stack.push(remain);
    recurse(Math.floor(n/2));
  };

  recurse(num);

  var str = '';
  while (!stack.isEmpty())
    str += stack.pop();

  return str;
};
