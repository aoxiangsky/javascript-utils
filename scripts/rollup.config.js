const path = require("path");
// import typescript from "rollup-plugin-typescript2";
// 帮助寻找node_modules里的包,allows us to load the third-party modules
import resolve from '@rollup/plugin-node-resolve';
// 将非ES6语法的包转为ES6可用， converts them into the ES6 version.
import commonjs from "@rollup/plugin-commonjs";
// 可以引用node中的全局变量
import builtins from 'rollup-plugin-node-builtins'
// 替换待打包文件里的一些变量，如 process在浏览器端是不存在的，需要被替换
// import replace from "@rollup/plugin-replace";
// rollup 支持识别 json 文件
import json from '@rollup/plugin-json';
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { dependencies } from "../package.json";

const extensions = ['.ts', '.js']

export default {
  input: "src/main.ts",
  output: [
    {
      file: "lib/index.js",
      format: "esm",
      name: "eagle",
      sourcemap: true,
    }
  ],
  external: [...Object.keys(dependencies || {})],
  plugins: [
    json({
      preferConst: true,
      indent: '  ',
    }),
    builtins(),
    //帮助rollup查找npm包路径
    resolve({
      extensions, 
      jsnext: true,
      main: true,
      browser: true,
    }),
    //将cjs的npm包转成esm,在代码中可以用import引入
    commonjs({ extensions:['js'], include: 'node_modules/**' }),
    // typescript({
    //   tsconfig: path.resolve(__dirname, '../tsconfig.json'),
    //   exclude: "node_modules/**",
    //   typescript: require("typescript"),
    //   lib: ["es5", "es6", "dom"],
    //   target: "es5"
    // }),
    babel({
      extensions,
      presets: [
        '@babel/preset-typescript',
        [
          '@babel/preset-env',
          {
            targets: ['>1%', 'Firefox ESR', 'ie >= 11'],
            modules: false,
          },
        ],
      ],
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-class-properties',
      ],
      babelrc: false,
    }),
    // 压缩
    terser(),
  ],
};
