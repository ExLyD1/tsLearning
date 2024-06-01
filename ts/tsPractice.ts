const userName : string = 'alex'
const age : number = 15
function greet(name:string) {
  console.log(`Hello ${name}`);
}
function isAdult(age:number) {
  return age >= 18 ? true : false
}
interface Person {
  name : string
  age : number
  email : string
  job ?: string
}
const pers : Person = {
  name: 'alex',
  age : 22,
  email : 'qwe',
}
function printPers(pers:Person) : void {
  console.log(pers);
}
class Animal {
  constructor(public name: string, public age: number){}

  speak(): void {
    console.log(`this is ${this.name} and it is ${this.age} years old`);
    
  }
}

class Dog extends Animal {
  bark() : void {
    console.log('Woof!');
  }
}

let myDog = new Dog('Rex', 5)
myDog.speak()
myDog.bark()

function identity <T>(par:T) : T {
  return par
}

function getArrayLength<T>(arr: T[] ) : number {
  return arr.length
}

function divide(num1 : number, num2 : number) : string | number{
  if ( num2 === 0) {
    return "Division by zero"
  } else {
    return num1 / num2
  }
}
function safeDivide() : any {
  try {
    divide(1,2)
  } catch (error) {
    console.error(error);
  }
}


interface Employee {
  id: number;
  name: string;
  position: string;
}

interface Department {
  id: number;
  name: string;
  employees: Employee[];
}

interface Company {
  name: string;
  departments: Department[];
}


function addEmployee(company: Company, departmentId: number, employee: Employee): void {
  const department : Department {
    id : departmentId,
    name: employee.name,
    position : company,
  }
}
