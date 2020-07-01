import getTag from './utils/getTag';
function isString(value: any) {
    const type = typeof value;
    return (
        type === 'string' ||
        (type === 'object' && value != null && !Array.isArray(value) && getTag(value) == '[object String]')
    );
}

export default isString;
