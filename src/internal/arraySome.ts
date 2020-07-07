function arraySome(array: Array<any>, predicate: Function) {
    var index = -1,
        length = array == null ? 0 : array.length;
    while (++index < length) {
        if (predicate(array[index], index, array)) {
            return true;
        }
    }
    return false;
}

export default arraySome;
