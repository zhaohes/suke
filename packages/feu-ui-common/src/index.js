'use strict';
import Message from './components/message';
import add from 'feu-utils';

function ui(a, b) {
    let res = add(a, b);
    console.log('结果为：' + res);
}

export { Message, ui };