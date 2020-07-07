import isObjectLike from './isObjectLike';
import getTag from './internal/getTag';

export default function isNumber(value: any) {
    return typeof value === 'number' || (isObjectLike(value) && getTag(value) == '[object Number]');
}
