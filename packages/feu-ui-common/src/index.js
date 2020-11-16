'use strict';
import Message from './components/message';
import Alert from './components/alert';
const { add } = require('feu-utils');


function ui(a, b) {
    let res = add(a, b);
    console.log('结果为：' + res);
}

export default { ui, Message,Alert };