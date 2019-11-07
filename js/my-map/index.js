'use strict';

Array.prototype.myMap = function(callback, thisArg) {
    let context, newArray, iterator;
    let thisArray = Object(this);
    let arrayLength = thisArray.length >>> 0;

    if (!this) {
        throw new TypeError(' this is null or not defined');
    }

    if (typeof callback !== 'function') {
        throw new TypeError(callback + ' is not a function');
    }

    if (arguments.length > 1) {
        context = thisArg;
    }

    newArray = new Array(arrayLength);
    iterator = 0;

    while (iterator < arrayLength) {
        let value;
        let mappedValue;

        if (iterator in thisArray) {
            value = thisArray[iterator];
            mappedValue = callback.call(context, value, iterator, thisArray);
            newArray[iterator] = mappedValue;
        }
        iterator++;
    }
    return newArray;
};

