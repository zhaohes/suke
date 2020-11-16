var _require = require('feu-utils'),
    add = _require.add;

function ui(a, b) {
  var res = add(a, b);
  console.log('结果为：' + res);
}

var index = {
  ui: ui
};

export default index;
