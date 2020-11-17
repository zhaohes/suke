'use strict';
import Message from './components/message';
// import add from 'feu-utils';
import { concat } from 'lodash';
function ui(a, b) {
    // let res = add(a, b);
    console.log('结果为：' + a+b);
}

export { Message, ui, concat };