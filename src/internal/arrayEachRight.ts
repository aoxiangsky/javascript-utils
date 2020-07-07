function arrayEachRight(array: Array<any>, iteratee: Function) {
    var length = array == null ? 0 : array.length;
    while (length--) {
        if (iteratee(array[length], length, array) === false) {
            break;
        }
    }
    return array;
}

export default arrayEachRight;
