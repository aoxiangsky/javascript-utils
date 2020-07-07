import getTag from './internal/getTag';
import isObjectLike from './isObjectLike.js';

var weakMapTag = '[object WeakMap]';

function isWeakMap(value:any) {
    return isObjectLike(value) && getTag(value) == weakMapTag;
}

export default isWeakMap;
