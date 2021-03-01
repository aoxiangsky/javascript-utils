import filesize from 'rollup-plugin-filesize';
import { terser } from 'rollup-plugin-terser';

import baseConfig from './rollup.base';
import { name, version, author } from '../package.json';

const banner =
    `${'/*!\n' + ' * '}${name}.js v${version}\n` +
    ` * (c) 2021-${new Date().getFullYear()} ${author}\n` +
    ` * Released under the MIT License.\n` +
    ` */`;

export default [
    {
        ...baseConfig,
        output: [
            // umd development version with sourcemap
            {
                file: `lib/${name}.js`,
                format: 'umd',
                name,
                sourcemap: true,
                banner,
            },
            // cjs and esm version
            {
                file: `lib/${name}.cjs.js`,
                format: 'cjs',
                banner,
            },
            // cjs and esm version
            {
                file: `lib/${name}.esm.js`,
                format: 'es',
                banner,
            },
        ],
        plugins: [...baseConfig.plugins, filesize()],
    },
    // .min.js
    {
        ...baseConfig,
        output: [
            // umd with compress version
            {
                file: `lib/${name}.min.js`,
                format: 'umd',
                name,
                banner,
            },
        ],
        plugins: [
            ...baseConfig.plugins,
            // 压缩
            terser(),
            filesize(),
        ],
    },
];
