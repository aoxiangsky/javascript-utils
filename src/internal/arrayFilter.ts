function arrayFilter(array: Array<any>, predicate: Function) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];
    while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}

export default arrayFilter;
