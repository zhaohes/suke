import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
// import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';

const sass = require('node-sass');
const fs = require('fs');
const path = require('path');


let pathname = path.join(__dirname, './packages');

let dirArr = fs.readdirSync(pathname);

const processSass = function (context) {
    return new Promise((resolve, reject) => {
        sass.render({
            file: context
        }, function (err, result) {
            if (!err) {
                resolve(result);
            } else {
                reject(err);
            }
        });
    });
};

function createRollupConfig(packages) {
    let configs = [];

    packages.forEach((file, index) => {
        let config = configs[index] = {};
        config.input = 'packages/' + file + '/src/index.js';
        config.external = ['react','antd-mobile'];
        config.output = {
            format: 'esm',
            file: 'packages/' + file + '/lib/index.js',
            name: file,
            globals: {
                react: 'React'
            }
        };
        config.plugins = [
            resolve(),
            eslint({
                throwOnError: false,
                throwOnWarning: false,
                include: ['packages/**/*.js'],
                exclude: ['node_modules/**']
            }),
            postcss({
                extract: true,
                extensions: ['css', 'scss'],
                process: processSass
            }),
            babel({
                exclude: '**/node_modules/**',
                extensions: ['.js', '.jsx'],
                babelHelpers: 'runtime'
            }),
            commonjs()
        ];
    });
    return configs;
}

export default createRollupConfig(dirArr);