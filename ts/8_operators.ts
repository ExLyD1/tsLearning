interface Person {
  name: string
  age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'


type User = {
  _id: number
  name: string
  email: string
  createdAt: Date
}

// Exclude - <keyof type, delete fields(other remain)> 
type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'

//Pick - <type, remain fields(other delete)> - Object
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let user1 : UserKeysNoMeta2 = {
  email : 'email',
  name:'vanya'
}