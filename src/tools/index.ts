const _toString = Object.prototype.toString;

export function isPlainObject(obj: any): boolean {
    return _toString.call(obj) === '[object Object]';
}

export function isRegExp(v: any): boolean {
    return _toString.call(v) === '[object RegExp]';
}

export function toString(val: any): string {
    return val == null
        ? ''
        : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
        ? JSON.stringify(val, null, 2)
        : String(val);
}

export function toNumber(val: string): number | string {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
}
