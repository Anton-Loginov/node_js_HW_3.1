const timer = require('./timer');

{
    timer.time("", "myMap");
    let mapped = [2,4,13,14,20].myMap(item => item);

    console.log(mapped, 'myMapArray');
    timer.timeEnd("", "myMap");
}
{
    timer.time("", "myForEach");

    [2,4,13,14].myForEach(item => console.log(item, 'myForEach'));
    timer.timeEnd("", "myForEach");
}

{
    timer.time("", "mySort");

    let mySortArray = [2, 10, 0, 12, 14, 20];
    let sorted = mySortArray.mySort((a, b) => a.length < b.length);

    console.log(sorted, 'sorted');
    timer.timeEnd("", "mySort");
}

{
    timer.time("", "myPush");

    let myPushArray = [];
    for (let i = 0; i <= 1000; i++) {
        myPushArray.myPush(i);
    }
    console.log(myPushArray, 'myPushArray');
    timer.timeEnd("", "myPush");
}

{
    timer.time("", "myFilter");
    let filtered = [2, 10, 0, 12, 14, 20, 2,4,13,14].myFilter(item => item > 15);

    console.log(filtered, 'myFilter');
    timer.timeEnd("", "myFilter");
}

timer.logAll();

