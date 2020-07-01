'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function isObject(value) {
  var type = _typeof(value);

  return value != null && (type === 'object' || type === 'function'); // lodash写法
  // return type === 'function' || type === 'object' && !!obj;  // underscore写法
}

function isNull(value) {
  return value === null;
}

function isObjectLike(value) {
  return _typeof(value) === 'object' && value !== null;
}

var toString = Object.prototype.toString;

function getTag(value) {
  if (value == null) {
    return value === undefined ? '[object Undefined]' : '[object Null]';
  }

  return toString.call(value);
}

function isNumber(value) {
  return typeof value === 'number' || isObjectLike(value) && getTag(value) == '[object Number]';
}

function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) != '[object Object]') {
    return false;
  }

  if (Object.getPrototypeOf(value) === null) {
    return true;
  }

  var proto = value;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(value) === proto;
}

function isString(value) {
  var type = _typeof(value);

  return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getTag(value) == '[object String]';
}

exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isObjectLike = isObjectLike;
exports.isPlainObject = isPlainObject;
exports.isString = isString;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWFnbGUtdXRpbHMuY2pzLmpzIiwic291cmNlcyI6WyIuLi9zcmMvaXNPYmplY3QudHMiLCIuLi9zcmMvaXNOdWxsLnRzIiwiLi4vc3JjL2lzT2JqZWN0TGlrZS50cyIsIi4uL3NyYy91dGlscy9nZXRUYWcudHMiLCIuLi9zcmMvaXNOdW1iZXIudHMiLCIuLi9zcmMvaXNQbGFpbk9iamVjdC50cyIsIi4uL3NyYy9pc1N0cmluZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc09iamVjdCh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG4gICAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpOyAvLyBsb2Rhc2jlhpnms5VcclxuICAgIC8vIHJldHVybiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IHR5cGUgPT09ICdvYmplY3QnICYmICEhb2JqOyAgLy8gdW5kZXJzY29yZeWGmeazlVxyXG59XHJcbiIsImZ1bmN0aW9uIGlzTnVsbCh2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzTnVsbDtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZTogYW55KSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXNPYmplY3RMaWtlO1xyXG4iLCJjb25zdCB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcclxuXHJcbmZ1bmN0aW9uIGdldFRhZyh2YWx1ZTphbnkpIHtcclxuICBpZiAodmFsdWUgPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyAnW29iamVjdCBVbmRlZmluZWRdJyA6ICdbb2JqZWN0IE51bGxdJ1xyXG4gIH1cclxuICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2V0VGFnIiwiaW1wb3J0IGlzT2JqZWN0TGlrZSBmcm9tICcuL2lzT2JqZWN0TGlrZSc7XHJcbmltcG9ydCBnZXRUYWcgZnJvbSAnLi91dGlscy9nZXRUYWcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNOdW1iZXIodmFsdWU6IGFueSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgfHwgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgZ2V0VGFnKHZhbHVlKSA9PSAnW29iamVjdCBOdW1iZXJdJyk7XHJcbn1cclxuIiwiaW1wb3J0IGdldFRhZyBmcm9tICcuL3V0aWxzL2dldFRhZyc7XHJcbmltcG9ydCBpc09iamVjdExpa2UgZnJvbSAnLi9pc09iamVjdExpa2UnO1xyXG5cclxuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZTphbnkpIHtcclxuICAgIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBnZXRUYWcodmFsdWUpICE9ICdbb2JqZWN0IE9iamVjdF0nKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgaWYgKE9iamVjdC5nZXRQcm90b3R5cGVPZih2YWx1ZSkgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIGxldCBwcm90byA9IHZhbHVlO1xyXG4gICAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykgIT09IG51bGwpIHtcclxuICAgICAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKHZhbHVlKSA9PT0gcHJvdG87XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGlzUGxhaW5PYmplY3Q7XHJcbiIsImltcG9ydCBnZXRUYWcgZnJvbSAnLi91dGlscy9nZXRUYWcnO1xyXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZTogYW55KSB7XHJcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbHVlO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICB0eXBlID09PSAnc3RyaW5nJyB8fFxyXG4gICAgICAgICh0eXBlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPSBudWxsICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiBnZXRUYWcodmFsdWUpID09ICdbb2JqZWN0IFN0cmluZ10nKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaXNTdHJpbmc7XHJcbiJdLCJuYW1lcyI6WyJpc09iamVjdCIsInZhbHVlIiwidHlwZSIsImlzTnVsbCIsImlzT2JqZWN0TGlrZSIsInRvU3RyaW5nIiwiT2JqZWN0IiwicHJvdG90eXBlIiwiZ2V0VGFnIiwidW5kZWZpbmVkIiwiY2FsbCIsImlzTnVtYmVyIiwiaXNQbGFpbk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwicHJvdG8iLCJpc1N0cmluZyIsIkFycmF5IiwiaXNBcnJheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUE4QjtBQUN6QyxNQUFNQyxJQUFJLFdBQVVELEtBQVYsQ0FBVjs7QUFDQSxTQUFPQSxLQUFLLElBQUksSUFBVCxLQUFrQkMsSUFBSSxLQUFLLFFBQVQsSUFBcUJBLElBQUksS0FBSyxVQUFoRCxDQUFQLENBRnlDO0FBR3pDO0FBQ0g7O0FDSkQsU0FBU0MsTUFBVCxDQUFnQkYsS0FBaEIsRUFBNEI7QUFDeEIsU0FBT0EsS0FBSyxLQUFLLElBQWpCO0FBQ0g7O0FDRk0sU0FBU0csWUFBVCxDQUFzQkgsS0FBdEIsRUFBa0M7QUFDckMsU0FBTyxRQUFPQSxLQUFQLE1BQWlCLFFBQWpCLElBQTZCQSxLQUFLLEtBQUssSUFBOUM7QUFDSDs7QUNGRCxJQUFNSSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkYsUUFBbEM7O0FBRUEsU0FBU0csTUFBVCxDQUFnQlAsS0FBaEIsRUFBMkI7QUFDekIsTUFBSUEsS0FBSyxJQUFJLElBQWIsRUFBbUI7QUFDakIsV0FBT0EsS0FBSyxLQUFLUSxTQUFWLEdBQXNCLG9CQUF0QixHQUE2QyxlQUFwRDtBQUNEOztBQUNELFNBQU9KLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjVCxLQUFkLENBQVA7QUFDRDs7QUNKYyxTQUFTVSxRQUFULENBQWtCVixLQUFsQixFQUE4QjtBQUN6QyxTQUFPLE9BQU9BLEtBQVAsS0FBaUIsUUFBakIsSUFBOEJHLFlBQVksQ0FBQ0gsS0FBRCxDQUFaLElBQXVCTyxNQUFNLENBQUNQLEtBQUQsQ0FBTixJQUFpQixpQkFBN0U7QUFDSDs7QUNGRCxTQUFTVyxhQUFULENBQXVCWCxLQUF2QixFQUFrQztBQUM5QixNQUFJLENBQUNHLFlBQVksQ0FBQ0gsS0FBRCxDQUFiLElBQXdCTyxNQUFNLENBQUNQLEtBQUQsQ0FBTixJQUFpQixpQkFBN0MsRUFBZ0U7QUFDNUQsV0FBTyxLQUFQO0FBQ0g7O0FBQ0QsTUFBSUssTUFBTSxDQUFDTyxjQUFQLENBQXNCWixLQUF0QixNQUFpQyxJQUFyQyxFQUEyQztBQUN2QyxXQUFPLElBQVA7QUFDSDs7QUFDRCxNQUFJYSxLQUFLLEdBQUdiLEtBQVo7O0FBQ0EsU0FBT0ssTUFBTSxDQUFDTyxjQUFQLENBQXNCQyxLQUF0QixNQUFpQyxJQUF4QyxFQUE4QztBQUMxQ0EsSUFBQUEsS0FBSyxHQUFHUixNQUFNLENBQUNPLGNBQVAsQ0FBc0JDLEtBQXRCLENBQVI7QUFDSDs7QUFDRCxTQUFPUixNQUFNLENBQUNPLGNBQVAsQ0FBc0JaLEtBQXRCLE1BQWlDYSxLQUF4QztBQUNIOztBQ2RELFNBQVNDLFFBQVQsQ0FBa0JkLEtBQWxCLEVBQThCO0FBQzFCLE1BQU1DLElBQUksV0FBVUQsS0FBVixDQUFWOztBQUNBLFNBQ0lDLElBQUksS0FBSyxRQUFULElBQ0NBLElBQUksS0FBSyxRQUFULElBQXFCRCxLQUFLLElBQUksSUFBOUIsSUFBc0MsQ0FBQ2UsS0FBSyxDQUFDQyxPQUFOLENBQWNoQixLQUFkLENBQXZDLElBQStETyxNQUFNLENBQUNQLEtBQUQsQ0FBTixJQUFpQixpQkFGckY7QUFJSDs7Ozs7Ozs7OyJ9
