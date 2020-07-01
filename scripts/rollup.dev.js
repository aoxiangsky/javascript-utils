const path = require('path');
const serve = require('rollup-plugin-serve');
const resolveFile = function (filePath) {
    return path.join(__dirname, '..', filePath);
};

import { name } from '../package.json';

import baseConfig from './rollup.base';

export default {
    ...baseConfig,
    output: [
        {
            file: `lib/${name}.js`,
            format: 'umd',
            name,
            sourcemap: true,
        },
        {
            file: `lib/${name}.cjs.js`,
            format: 'cjs',
            name,
            sourcemap: 'inline',
        },
    ],
    plugins: [
        ...baseConfig.plugins,
        serve({
            open: true,
            host: 'localhost',
            port: 6866,
            contentBase: '../lib/eagle-utils.js',
            historyApiFallback: true,
            contentBase: [resolveFile('public'), resolveFile('lib')],
        }),
    ],
};
