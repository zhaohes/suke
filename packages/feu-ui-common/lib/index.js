import React from 'react';
import add from 'feu-utils';

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose;

var Message = /*#__PURE__*/function (_React$Component) {
  inheritsLoose(Message, _React$Component);

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

function ui(a, b) {
  var res = add(a, b);
  console.log('结果为：' + res);
}

var index = {
  ui: ui,
  Message: Message
};

export default index;
