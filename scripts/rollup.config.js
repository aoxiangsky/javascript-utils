const path = require("path");
import typescript from "rollup-plugin-typescript2";
// 帮助寻找node_modules里的包,allows us to load the third-party modules
import resolve from '@rollup/plugin-node-resolve';
// 将非ES6语法的包转为ES6可用， converts them into the ES6 version.
import commonjs from "@rollup/plugin-commonjs";
// 替换待打包文件里的一些变量，如 process在浏览器端是不存在的，需要被替换
// import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { dependencies } from "../package.json";
export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/cjs.js",
      format: "umd",
      name: "test",
    },
  ],
  external: [...Object.keys(dependencies || {})],
  plugins: [
    babel({ babelHelpers: "bundled", exclude: "node_modules/**" }),
    typescript({
      typescript: require("typescript"),
    }),
    resolve(),
    commonjs(),
    terser(),
  ],
};
