import React from 'react';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var Message = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Message, _React$Component);

  function Message() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Message.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement("h1", {
      className: "sk-common-message"
    }, "Message");
  };

  return Message;
}(React.Component);

var _require = require('feu-utils'),
    add = _require.add;

function ui(a, b) {
  var res = add(a, b);
  console.log('结果为：' + res);
}

var index = {
  ui: ui,
  Message: Message
};

export default index;
