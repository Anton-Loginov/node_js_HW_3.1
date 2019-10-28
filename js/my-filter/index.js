'use strict';

Array.prototype.myFilter = function (callback, thisArg) {
    const arr = thisArg || this;
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};