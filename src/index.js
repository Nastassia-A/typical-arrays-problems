
exports.min = function min (array) {
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        while (array.length > 1) {
            let num = ((array[0] < array[1]) ? array[0] : array[1]);
            array.splice(0, 2, num);
        }
        return array[0];
    }
}

exports.max = function max (array) {
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        while (array.length > 1) {
            let num = array[0] > array[1] ? array[0] : array[1];
            array.splice(0, 2, num);
        }
        return +array[0];
    }
}

exports.avg = function avg (array) {
    if (array === undefined || array.length == 0) {
        return 0;
    } else {
        let sum = array.reduce((acc, item) => acc + item, 0);
        return sum / array.length;
    }
}
