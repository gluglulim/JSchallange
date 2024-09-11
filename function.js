function sayHello(nameOfPerson, age) {
    console.log("hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello();
sayHello("nico", 30);
sayHello("lim", 20);
sayHello("lynn", 12);

function plus(first, second) {
    console.log(first + second);
}

plus(8, 60);

function divide(a, b) {
    console.log(a / b);
}

divide(98, 20);

const player = {
    name: "lim",
    sayHello: function (otherPersonsName) {
        console.log("hello!" + otherPersonsName + " nice to meet you!");
    }
}

console.log(player.name);
player.sayHello("lim");
player.sayHello("nico");

const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    power: function (a, b) {
        console.log(a ** b);
    },
    minus: function (a, b) {
        console.log(a - b);
    }
}

calculator.add(1, 2);
calculator.power(2, 3);
calculator.minus(5, 3);