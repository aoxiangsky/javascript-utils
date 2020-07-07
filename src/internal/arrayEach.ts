// forEach 可以中断循环的版本
function arrayEach(array: Array<any>, iteratee: Function) {
    var index = -1,
        length = array == null ? 0 : array.length;
    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}

export default arrayEach;
