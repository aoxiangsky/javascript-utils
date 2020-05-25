const path = require('path');
import typescript from 'rollup-plugin-typescript2';
import pkg from '../package.json';
import {terser} from "rollup-plugin-terser";
export default {
 input: 'src/index.ts', // our source file
 output: [
  {
   file: 'dist/cjs.js',
   format: 'cjs'
  },
  {
   file: 'dist/es.js',
   format: 'es' // the preferred format
  },
  {
   file: 'dist/iife.js',
   format: 'iife',
   name: 'MyPackage' // the global which can be used in a browser
  }
 ],
 external: [
  ...Object.keys(pkg.dependencies || {})
 ],
 plugins: [
  typescript({
   typescript: require('typescript'),
  }),
  terser() // minifies generated bundles
 ]
};