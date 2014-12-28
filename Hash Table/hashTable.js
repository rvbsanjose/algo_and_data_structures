var HashTable = function(){
	this._limit = 8;
	this._count = 0;
	this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var bucket = this._storage.get(i);

	this._count++;
	if (bucket) {
		var tuple = _.find(bucket, function (tuple) {
			return tuple[0] === k;
		});
		if (tuple) tuple[1] = v
		else {
			bucket.push([k, v]);
			if (this._count > (this._limit * 0.75))
				this.resize(this._limit * 2);
		}
	} else this._storage.set(i, [[k, v]]);
};

HashTable.prototype.retrieve = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var bucket = this._storage.get(i);
	if (bucket) {
		var tuple = _.find(bucket, function (tuple) {
			return tuple[0] === k;
		});
		if (tuple) return tuple[1];
	} else return null;
};

HashTable.prototype.remove = function(k){
	var i = getIndexBelowMaxForKey(k, this._limit);
	var bucket = this._storage.get(i);
	if (bucket) {
		_.each(bucket, function (tuple, index) {
			if (tuple[0] === k) {
				this._count--;
				bucket.splice(index, 1);
				if (this._count < (0.25 * this._limit))
					this.resize(this._limit / 2);
			}
		}, this);
		return null;
	} else return null;
};

HashTable.prototype.resize = function (newLimit) {
	var oldStorage = this._storage;

	this._count = 0;
	this._limit = newLimit;
	this._storage = LimitedArray(this._limit);

	oldStorage.each(function (bucket) {
		if (bucket) {
			_.each(bucket, function (tuple) {
				this.insert(tuple[0], tuple[1]);
			}, this);
		}
	}.bind(this));
};