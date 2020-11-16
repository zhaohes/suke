const fs = require('fs');
const path = require('path');

let pathname = path.join(__dirname, './packages');

let dirArr = fs.readdirSync(pathname);
// console.log(dirArr)
function createRollupConfig(packages) {
    let configs = [];

    packages.forEach((file, index) => {
        let config = configs[index] = {};
        config.input = 'packages/' + file + '/src/index.js';
        config.output = {
            format: 'es',
            file: 'packages/' + file + '/lib/index.js',
            name: file
        }
    });
    return configs;
}

export default createRollupConfig(dirArr);