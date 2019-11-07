'use strict';

Array.prototype.myFilter = function (callback, thisArg) {
    let arr = thisArg || this;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};