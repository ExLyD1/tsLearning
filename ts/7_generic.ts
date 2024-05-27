const arrOfNumbers: Array<number> = [1, 1, 2, 3, 5, 8]
const arrOfString: Array<string> = ['hello', 'world']
const arrOfBoolean: Array<boolean> = [true, false]

// <Letter> - любая буква показывает что такой то тип данных и мы с ним будем взаимодействовать
function reverse<T>(array: T[]) : T[] {
  console.log(array.reverse())
  return array.reverse()
}

reverse(arrOfNumbers)
reverse(arrOfString)
reverse(arrOfBoolean)