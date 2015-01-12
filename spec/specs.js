var Queue  = require('../Queue/queue');
var expect = require('../node_modules/chai/chai').expect;

describe('Queue', function () {

  var queue;
  beforeEach(function () {
    queue = new Queue();
  });

  describe('#initialize()', function () {

    it('has property values of "storage" and "front" and "counter"', function () {
      expect(queue).to.have.property('storage');
      expect(queue).to.have.property('front');
      expect(queue).to.have.property('counter');
    });

    it('has a counter property initialized to "0"', function () {
      expect(queue.counter).to.equal(0);
    });

    it('has a front property initialized to "0"', function () {
      expect(queue.front).to.equal(0);
    })

    it('storage property initialized as a object', function () {
      expect(queue.storage).to.be.an('object');
    });

  });

  describe('#enqueue()', function () {

    it('adds the value to the queue', function () {
      queue.enqueue(7);
      expect(queue.storage[0]).to.equal(7);
    });

    it('contains the property in the queue', function () {
      queue.enqueue(7);
      expect(queue.storage).to.have.key('0');
    });

    it('increments the counter when enqueue', function () {
      var counter = queue.counter;
      queue.enqueue(7);
      expect(queue.counter).to.be.above(counter);
    });

  });

  describe('#dequeue()', function () {

    it('returns the correct value from value from the queue', function () {
      queue.enqueue(4);
      queue.enqueue(9);
      queue.enqueue(13);
      queue.enqueue(6);
      var value = queue.dequeue();
      expect(value).to.equal(4);
    });

    it('decreases "counter" property', function () {
      queue.enqueue(4);
      queue.enqueue(9);

      var counter = queue.counter;
      for (var i = 0; i < 2; i++) queue.dequeue();
      expect(queue.counter).to.equal(0);
    });

    it('keeps track of the next value to dequeue', function () {
      queue.enqueue(4);
      queue.enqueue(9);

      for (var i = 0; i < 2; i++) queue.dequeue();
      expect(queue.front).to.equal(2);
    });

  });

  describe('#isEmpty()', function () {

    it('knows the if the queue is empty', function () {
      expect(queue.isEmpty()).to.be.true;
    });

  });

  describe('#size()', function () {

    it('returns the current size of the queue', function () {
      queue.enqueue(7);
      expect(queue.size()).to.equal(1);
    });

  });

});
