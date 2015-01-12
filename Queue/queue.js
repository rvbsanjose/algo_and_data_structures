var Queue = function () {
  this.storage = {};
  this.front   = 0;
  this.counter = 0;
};

Queue.prototype.enqueue = function (n) {
  this.storage[this.counter] = n;
  this.counter++;
};

Queue.prototype.dequeue = function () {
  this.counter--;
  var obj = this.storage[this.front];
  delete this.storage[this.front];

  this.front++;
  return obj;
};

Queue.prototype.isEmpty = function () {
  return this.counter - this.front === 0;
};

Queue.prototype.size = function () {
  return this.counter;
};

module.exports = Queue;
