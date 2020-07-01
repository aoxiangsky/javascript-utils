export default function isObject(value: any) {
    const type = typeof value;
    return value != null && (type === 'object' || type === 'function'); // lodash写法
    // return type === 'function' || type === 'object' && !!obj;  // underscore写法
}
