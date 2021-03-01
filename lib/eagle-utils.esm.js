/*!
 * eagle-utils.js v0.0.1
 * (c) 2021-2021 aoxiang
 * Released under the MIT License.
 */
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

var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

var isMobile = function isMobile() {
  var check = false;

  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor);

  return check;
};

var environment = {
  inBrowser: inBrowser,
  UA: UA,
  isIE: isIE,
  isIE9: isIE9,
  isEdge: isEdge,
  isAndroid: isAndroid,
  isIOS: isIOS,
  isChrome: isChrome,
  isPhantomJS: isPhantomJS,
  isFF: isFF,
  isMobile: isMobile
};

export { environment as environmentJudge, isNull, isNumber, isObject, isObjectLike, isPlainObject, isString, phoneNumber as phoneNumberValidator };
