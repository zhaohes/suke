function add(a, b) {
  console.log('tools库，调用函数add,入参：%d, %d', a, b);
  return a + b;
}

function min(a, b) {
  console.log('tools库，调用函数min,入参：%d, %d', a, b);
  return Math.min(a, b);
}

var doSomeThing = function doSomeThing() {
  console.log('doSomeThing');
};

var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  var _proto = Person.prototype;

  _proto.say = function say() {
    console.log('my name is' + this.name + ',my age is' + this.age);
  };

  return Person;
}();

var person = new Person('siri', 18);
var index = {
  add: add,
  min: min,
  person: person,
  doSomeThing: doSomeThing
};

export default index;
