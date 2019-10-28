'use strict';

Array.prototype.mySort = function (funcSort) {
    funcSort = funcSort || function (a, b) {
        a += '';
        b += '';
        return a > b;
    };
    let swapped = false;
    const thisArray = Object(this);
    const len = thisArray.length;
    const newArr = thisArray.slice(0);

    do {
        for(let i = 0; i < len - 1; ++i) {
            if (funcSort(newArr[i], newArr[i+1])) {
                let temp = newArr[i];
                newArr[i] = newArr[i+1];
                newArr[i+1] = temp;
                swapped = true;
            }
        }
    }
    while(swapped);

    return newArr;
};