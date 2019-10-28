'use strict';

Array.prototype.myForEach = function (callback, thisArg) {
    let context, iterator;
    const thisArray = Object(this);
    const len = thisArray.length >>> 0;

    if (!this) {
        throw new TypeError(' this is null or not defined');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    if (arguments.length > 1) {
        context = thisArg;
    }

    iterator = 0;

    while (iterator < len) {
        let currValue;
        if (iterator in thisArray) {
            currValue = thisArray[iterator];
            callback.call(context, currValue, iterator, thisArray);
        }
        iterator++;
    }
};