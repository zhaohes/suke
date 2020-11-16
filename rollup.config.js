import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

const fs = require('fs');
const path = require('path');


let pathname = path.join(__dirname, './packages');

let dirArr = fs.readdirSync(pathname);

function createRollupConfig(packages) {
    let configs = [];

    packages.forEach((file, index) => {
        let config = configs[index] = {};
        config.input = 'packages/' + file + '/src/index.js';
        config.output = {
            format: 'esm',
            file: 'packages/' + file + '/lib/index.js',
            name: file
        }
        config.plugins = [
            resolve(),
            babel({
                exclude: '**/node_modules/**',
                extensions: [".js", ".jsx"],
                babelHelpers: 'bundled',
                presets: [['@babel/preset-env', { modules: false, "loose": true }], '@babel/preset-react']
            }),
            commonjs()
        ]
    });
    return configs;
}

export default createRollupConfig(dirArr);