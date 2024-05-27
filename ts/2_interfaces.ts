interface Rect {
  readonly id : string
  color ?: string
  size : {
    width : number
    height : number
  } 
}

const rect1 : Rect = {
  id: '1234',
  size: {
    width : 20,
    height : 30,
  },
  color: '#CCC'
}

const rect2 : Rect = {
  id: '12345',
  size : {
    width : 10,
    height : 5,
  }
}
rect2.color = 'black'
// rect2.id = '1111'
// delete rect1.id

const rect3 = {} as Rect
const rect4 = <Rect>{}

// ==========================

// extends - наследование от другого интерфейса
interface RectWithArea extends Rect {
  getArea : () => number
}
const rect5 : RectWithArea = {
  id : '123',
  size : {
    width : 20,
    height : 20,
  },
  getArea(): number {
    return this.size.width * this.size.height
  },
}

// ============================
interface IClock {
  time : Date
  setTime(date: Date): void 
}
// implements - клас должен содержать интерфейс
class Clock implements IClock {
  time: Date = new Date()

  setTime(date : Date) : void {
    this.time = date
  }
}

// ==========================

interface Styles {
  [key: string]:string
}

const css : Styles = {
  border : '1px solid black',
  marginTop : '2px',
  borderRadius: '5px',
}