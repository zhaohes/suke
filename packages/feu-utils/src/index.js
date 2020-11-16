'use strict';

function add(a, b) {
    console.log("tools库，调用函数add,入参：%d, %d", a, b)
    return a + b;
}
function min(a, b) {
    console.log("tools库，调用函数min,入参：%d, %d", a, b)
    return Math.min(a, b);
}

let doSomeThing = () => {
    console.log("doSomeThing");
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log('my name is' + this.name + ',my age is' + this.age);
    }
}

let person = new Person('siri', 18);

export default { add, min, person, doSomeThing };
