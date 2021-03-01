function copyArray(source: Array<any>, array: Array<any>) {
    var index = -1,
        length = source.length;
    array || (array = Array(length));
    while (++index < length) {
        array[index] = source[index];
    }
    return array;
}

export default copyArray;
