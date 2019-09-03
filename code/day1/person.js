function Person1(name) {
    this.name = name;
    this.sayHello = () => console.log(this.name);
}

let person1 = new Person1('Hans Landa');
person1.sayHello();

class Person2 {
    constructor(name) {
        this.name = name;
    }
    sayHello() {
        console.log(this.name);
    }
}

let person2 = new Person2('Captain Schettino');
person2.sayHello();
