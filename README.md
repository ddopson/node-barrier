[![build status](https://secure.travis-ci.org/ddopson/node-barrier.png)](http://travis-ci.org/ddopson/node-barrier)

# Example 1

    var Barrier = require('barrier');

    var b = new Barrier();

    b.once(function() {
      // do some stuff
    });


    fs.doSomethingAsync(function () {
      b.complete();
    });

    
# Example 2

    var Barrier = require('barrier');
    
    var barrier = Barrier.createBarrier(5, function() {
      // do some stuff after b is called 5 times
    });
    
    for (var i = 0; i < 5; i++) {
      // does somthing async 5 times
      fs.doSomethingAsync(function () {
        barrier();
      });
    }

