function arrayFindIndex(array: any[], predicate: Function, fromIndex: number, fromRight: Boolean) {
    const { length } = array;
    let index = fromIndex + (fromRight ? 1 : -1);
    while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
            return index;
        }
    }
    return -1;
}

export default arrayFindIndex;
