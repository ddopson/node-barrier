
# Overview

    var Barrier = require('barrier');

    var b = new Barrier();

    b.once(function() {
      // do some stuff
    });


    fs.doSomethingAsync(function () {
      b.complete();
    });
