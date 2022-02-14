'use strict';

const allCashBoxing = [
    [12, 4500],
    [7, 3210],
    [4, 650],
    [3, 1250],
    [9, 7830],
    [1, 990],
    [6, 13900],
    [1, 370]
];


const getAveragePriceGoods = (arr) => {

    let averageCheck = 0;
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        res = arr[i][1] / arr[i][0];
        averageCheck += res / arr.length;
    }

    return console.log((Math.floor(averageCheck)));
}

getAveragePriceGoods(allCashBoxing);
