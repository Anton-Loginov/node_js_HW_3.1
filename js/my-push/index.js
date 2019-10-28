'use strict';

Array.prototype.myPush = function (...args) {
    let arr = this;
    for (let i = 0; i < args.length; i++) {
        arr[arr.length] = args[i];
    }
    return arr.length;
};


