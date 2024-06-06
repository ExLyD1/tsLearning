var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var userName = 'alex';
var age = 15;
function greet(name) {
    console.log("Hello ".concat(name));
}
function isAdult(age) {
    return age >= 18 ? true : false;
}
var pers = {
    name: 'alex',
    age: 22,
    email: 'qwe',
};
function printPers(pers) {
    console.log(pers);
}
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.speak = function () {
        console.log("this is ".concat(this.name, " and it is ").concat(this.age, " years old"));
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.bark = function () {
        console.log('Woof!');
    };
    return Dog;
}(Animal));
var myDog = new Dog('Rex', 5);
myDog.speak();
myDog.bark();
function identity(par) {
    return par;
}
function getArrayLength(arr) {
    return arr.length;
}
function divide(num1, num2) {
    if (num2 === 0) {
        return "Division by zero";
    }
    else {
        return num1 / num2;
    }
}
function safeDivide() {
    try {
        divide(1, 2);
    }
    catch (error) {
        console.error(error);
    }
}
function addEmployee(company, departmentId, employee) {
    var department, _a = void 0, departmentId = _a.id, employee = _a.name, name = _a.name, company = _a.position;
}
