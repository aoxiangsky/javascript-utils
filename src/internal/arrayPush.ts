function arrayPush(array: Array<any>, values: Array<any>) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
        array[offset + index] = values[index];
    }
    return array;
}

export default arrayPush;
