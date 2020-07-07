/*!
 * eagle-utils.js v0.0.1
 * (c) 2020-2020 aoxiang
 * Released under the MIT License.
 */
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
