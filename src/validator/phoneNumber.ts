// 正则表达式来源  github
// 地址：
// https://github.com/VincentSit/ChinaMobilePhoneNumberRegex/blob/master/README-CN.md


// 匹配所有号码（手机卡 + 数据卡 + 上网卡）
const allPhoneRegular = function(params: string): boolean {
    const reg = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4(?:(?:10|4[01])\d{3}|[68]\d{4}|[579]\d{2}))\d{6}$/;
    return reg.test(params);
};

// 匹配所有支持短信功能的号码（手机卡 + 上网卡）
const smsMobilePhoneRegular = function(params: string): boolean {
    const reg = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[0-35-9]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|6[2567]\d{2}|4[579]\d{2})\d{6}$/;
    return reg.test(params);
};

// 手机卡

// 匹配所有手机卡
const allMobilePhoneRegular = function(params: string): boolean {
    const reg = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/;
    return reg.test(params);
};

// 匹配中国移动
const chinaMobileRegular = function(params: string): boolean {
    const reg = /^(?:\+?86)?1(?:3(?:4[^9\D]|[5-9]\d)|5[^3-6\D]\d|7[28]\d|8[23478]\d|9[578]\d)\d{7}$/;
    return reg.test(params);
};

// 匹配中国联通
const chinaUnicomRegular = function(params: string): boolean {
    const reg = /^(?:\+?86)?1(?:3[0-2]|[578][56]|66|96)\d{8}$/;
    return reg.test(params);
};

// 匹配中国电信
const chinaTelecomRegular = function(params: string): boolean {
    const reg = /^(?:\+?86)?1(?:3(?:3\d|49)\d|53\d{2}|8[019]\d{2}|7(?:[37]\d{2}|40[0-5])|9[0139]\d{2})\d{6}$/;
    return reg.test(params);
};

// 匹配中国广电
export const broadcastRegular = function(params: string): boolean {
    const reg = /^(?:\+?86)?1(?:3(?:3\d|49)\d|53\d{2}|8[019]\d{2}|7(?:[37]\d{2}|40[0-5])|9[0139]\d{2})\d{6}$/;
    return reg.test(params);
};

// 匹配北京船舶通信导航有限公司（海事卫星通信）
const InmarsatRegular = function(params: string): boolean {
    const reg = /^(?:\+?86)?1749\d{7}$/;
    return reg.test(params);
};

// 工业和信息化部应急通信保障中心（应急通信）
const miitRegular = function(params: string): boolean {
    const reg = /^(?:\+?86)?174(?:0[6-9]|1[0-2])\d{6}$/;
    return reg.test(params);
};

// 虚拟运营商

// 匹配所有
const allMobilePhoneVisualRegular = function(params: string): boolean {
    const reg = /^(?:\+?86)?1(?:3\d{3}|5[^4\D]\d{2}|8\d{3}|7(?:[235-8]\d{2}|4(?:0\d|1[0-2]|9\d))|9[0-35-9]\d{2}|66\d{2})\d{6}$/;
    return reg.test(params);
};


// 匹配中国移动
const chinaMobileVisualRegular = function(params: string): boolean {
    const reg = /^(?:\+?86)?1(?:3(?:4[^9\D]|[5-9]\d)|5[^3-6\D]\d|7[28]\d|8[23478]\d|9[578]\d)\d{7}$/;
    return reg.test(params);
};


// 匹配中国联通
const chinaUnicomVisualRegular = function(params: string): boolean {
    const reg = /^(?:\+?86)?1(?:3[0-2]|[578][56]|66|96)\d{8}$/;
    return reg.test(params);
};

// 匹配中国电信
const chinaTelecomVisualRegular = function(params: string): boolean {
    const reg = /^(?:\+?86)?1(?:3(?:3\d|49)\d|53\d{2}|8[019]\d{2}|7(?:[37]\d{2}|40[0-5])|9[0139]\d{2})\d{6}$/;
    return reg.test(params);
};

export default {
    allPhoneRegular,
    smsMobilePhoneRegular,
    allMobilePhoneRegular,
    chinaMobileRegular,
    chinaUnicomRegular,
    chinaTelecomRegular,
    broadcastRegular,
    InmarsatRegular,
    miitRegular,
    allMobilePhoneVisualRegular,
    chinaMobileVisualRegular,
    chinaUnicomVisualRegular,
    chinaTelecomVisualRegular
}




