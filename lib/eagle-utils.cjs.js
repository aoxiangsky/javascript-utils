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

// 正则表达式来源  github
// 地址：
// https://github.com/VincentSit/ChinaMobilePhoneNumberRegex/blob/master/README-CN.md
// 匹配所有号码（手机卡 + 数据卡 + 上网卡）
var allPhoneRegular = function allPhoneRegular(params) {
  var reg = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4(?:(?:10|4[01])\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$/;
  return reg.test(params);
}; // 匹配所有支持短信功能的号码（手机卡 + 上网卡）


var smsMobilePhoneRegular = function smsMobilePhoneRegular(params) {
  var reg = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4[579]\d{2})\d{6}$/;
  return reg.test(params);
}; // 手机卡
// 匹配所有手机卡


var allMobilePhoneRegular = function allMobilePhoneRegular(params) {
  var reg = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/;
  return reg.test(params);
}; // 匹配中国移动


var chinaMobileRegular = function chinaMobileRegular(params) {
  var reg = /^(?:\+?86)?1(?:3(?:4[^9\D]|[5-9]\d)|5[^3-6\D]\d|7[28]\d|8[23478]\d|9[578]\d)\d{7}$/;
  return reg.test(params);
}; // 匹配中国联通


var chinaUnicomRegular = function chinaUnicomRegular(params) {
  var reg = /^(?:\+?86)?1(?:3[0-2]|[578][56]|66|96)\d{8}$/;
  return reg.test(params);
}; // 匹配中国电信


var chinaTelecomRegular = function chinaTelecomRegular(params) {
  var reg = /^(?:\+?86)?1(?:3(?:3\d|49)\d|53\d{2}|8[019]\d{2}|7(?:[37]\d{2}|40[0-5])|9[0139]\d{2})\d{6}$/;
  return reg.test(params);
}; // 匹配中国广电


var broadcastRegular = function broadcastRegular(params) {
  var reg = /^(?:\+?86)?1(?:3(?:3\d|49)\d|53\d{2}|8[019]\d{2}|7(?:[37]\d{2}|40[0-5])|9[0139]\d{2})\d{6}$/;
  return reg.test(params);
}; // 匹配北京船舶通信导航有限公司（海事卫星通信）

var InmarsatRegular = function InmarsatRegular(params) {
  var reg = /^(?:\+?86)?1749\d{7}$/;
  return reg.test(params);
}; // 工业和信息化部应急通信保障中心（应急通信）


var miitRegular = function miitRegular(params) {
  var reg = /^(?:\+?86)?174(?:0[6-9]|1[0-2])\d{6}$/;
  return reg.test(params);
}; // 虚拟运营商
// 匹配所有


var allMobilePhoneVisualRegular = function allMobilePhoneVisualRegular(params) {
  var reg = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/;
  return reg.test(params);
}; // 匹配中国移动


var chinaMobileVisualRegular = function chinaMobileVisualRegular(params) {
  var reg = /^(?:\+?86)?1(?:3(?:4[^9\D]|[5-9]\d)|5[^3-6\D]\d|7[28]\d|8[23478]\d|9[578]\d)\d{7}$/;
  return reg.test(params);
}; // 匹配中国联通


var chinaUnicomVisualRegular = function chinaUnicomVisualRegular(params) {
  var reg = /^(?:\+?86)?1(?:3[0-2]|[578][56]|66|96)\d{8}$/;
  return reg.test(params);
}; // 匹配中国电信


var chinaTelecomVisualRegular = function chinaTelecomVisualRegular(params) {
  var reg = /^(?:\+?86)?1(?:3(?:3\d|49)\d|53\d{2}|8[019]\d{2}|7(?:[37]\d{2}|40[0-5])|9[0139]\d{2})\d{6}$/;
  return reg.test(params);
};

var phoneNumber = {
  allPhoneRegular: allPhoneRegular,
  smsMobilePhoneRegular: smsMobilePhoneRegular,
  allMobilePhoneRegular: allMobilePhoneRegular,
  chinaMobileRegular: chinaMobileRegular,
  chinaUnicomRegular: chinaUnicomRegular,
  chinaTelecomRegular: chinaTelecomRegular,
  broadcastRegular: broadcastRegular,
  InmarsatRegular: InmarsatRegular,
  miitRegular: miitRegular,
  allMobilePhoneVisualRegular: allMobilePhoneVisualRegular,
  chinaMobileVisualRegular: chinaMobileVisualRegular,
  chinaUnicomVisualRegular: chinaUnicomVisualRegular,
  chinaTelecomVisualRegular: chinaTelecomVisualRegular
};

exports.isNull = isNull;
exports.isNumber = isNumber;
exports.isObject = isObject;
exports.isObjectLike = isObjectLike;
exports.isPlainObject = isPlainObject;
exports.isString = isString;
exports.phoneNumberValidator = phoneNumber;
