// 返回数组的第一个元素
function head(array: [any]) {
    return array != null && array.length ? array[0] : undefined;
}

export default head;
