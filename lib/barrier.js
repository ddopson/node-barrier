module.exports = Barrier;

function Barrier () {
  this.done = false;
  this.cb = function () { };
  return this;
}

Barrier.prototype.once = function (cb) {
  if(this.done) {
    cb();
  } else {
    var orig = this.cb;
    this.cb = function () {
      orig();
      cb();
    }
  }
};

Barrier.prototype.complete = function () {
  if(!this.done) {
    this.done = true;
    this.cb();
  }
};
