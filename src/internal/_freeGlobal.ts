// 检测node.js 中的全局globe变量是否存在
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

export default freeGlobal;
