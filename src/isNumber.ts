import isObjectLike from './isObjectLike';
import getTag from './utils/getTag';

export default function isNumber(value: any) {
    return typeof value === 'number' || (isObjectLike(value) && getTag(value) == '[object Number]');
}
