function arrayReduce(array: Array<any>, iteratee: Function, accumulator: any, initAccum: any) {
    var index = -1,
        length = array == null ? 0 : array.length;

    if (initAccum && length) {
        accumulator = array[++index];
    }
    while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
    }
    return accumulator;
}

export default arrayReduce;
