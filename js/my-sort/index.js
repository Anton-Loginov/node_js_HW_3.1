'use strict';

Array.prototype.mySort = function (funcSort) {
    funcSort = funcSort || ((a, b) => a > b);

    let n = this.length;
    let newArr = this.slice(0);

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (funcSort(newArr[j + 1], newArr[j])) {
                let t = newArr[j + 1];
                newArr[j + 1] = newArr[j];
                newArr[j] = t;
            }
        }
    }
    return newArr;
};