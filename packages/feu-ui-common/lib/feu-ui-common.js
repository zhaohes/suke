'use strict';

const { add } = require('feu-utils');

function ui(a, b) {
    let res = add(a, b);
    console.log('结果为：' + res);
}

module.exports = ui;

