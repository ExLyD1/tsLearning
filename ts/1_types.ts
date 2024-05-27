// const/let name : type = value
const isFetching : boolean = true
const isLoading : boolean = false

let int : number = 42
const float : number = 4.2
const  message : string = 'Hello Typescript'

// типизация массива, value(содержимое)[] или же Array<value(содержимое)>
const numberArray : number[] = [ 1 , 1 , 2 , 3 , 5 , 8 , 12]
const numberArray2 : Array<number> = [ 1 , 1 , 2 , 3 , 5 , 8 , 12]
const word: string[] = ['Hello', 'Typescript']

// Tuple
const contact : [string, number] = ['Vladilen', 12345678]


// Any - потом можно присваивать любой тип данных
let variable : any = 42
// ...
variable = 'New String'
variable = []

// ====
// void - ничего не возвращает
function sayMyName(name:string) : void {
  console.log(name);
}
sayMyName('{айзенберг')

// Never 
function throwError(message:string) : never {
  throw new Error(message)
}

// Type 
type Login = string

const login: Login = 'admin'
// const login2 : Login = 234

type ID = string | number
const id1 : ID = 1234
const id2 : ID = '1234'
// const id3 : ID = true


type SomeType = string | null | undefined 