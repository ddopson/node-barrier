[![build status](https://secure.travis-ci.org/ddopson/node-barrier.png)](http://travis-ci.org/ddopson/node-barrier)

# Overview

    var Barrier = require('barrier');

    var b = new Barrier();

    b.once(function() {
      // do some stuff
    });


    fs.doSomethingAsync(function () {
      b.complete();
    });
