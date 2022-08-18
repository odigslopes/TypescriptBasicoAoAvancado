// 1 - Generics
function showData<T>(arg: T): string{
  return `O dado é: ${arg}`

}

console.log(showData(5))
console.log(showData('Teste'))

// 2 - Contraints em generics
function showProductName<T extends {name:string}>(obj: T) {
  return `O nome do produto é: ${obj.name}`
}

const myObj = {name: "Janela", price: 15.99}
const otherObj = {name: "Carro", wheels: 4, engine: 1.0}
const thirdObj = {price: 15.99, category: "Computadores"}

console.log(showProductName(myObj))
console.log(showProductName(otherObj))
// console.log(showProductName(thirdObj))'

// 3 - Interfaces com generics
interface MyObject<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: string
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Car = {
  name: "Ford", 
  wheels: 4, 
  engine: 2.0, 
  color: "Vermelho"}

const myPen: Pen = {
  name: "Bic", 
  wheels: false, 
  engine: false, 
  color: "Azul"}

console.log(myCar)
console.log(myPen)

// 4 - Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${[key]} está presente no objeto e seu valor é: ${obj[key]}`

}

const server = {hd: '2TB', ram: '64GB'}

console.log(getSomeKey(server, 'hd'))
// console.log(getSomeKey(server, 'teste'))

// 5 - Keyof Type Operator
type Character = {
  name: string, 
  age: number, 
  hasDriveLicence: boolean}
type C = keyof Character

function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`
}

const myChar: Character = {
  name: "Diego", 
  age: 25, 
  hasDriveLicence: true}

console.log(showCharName(myChar, 'name'))
// showCharName("teste", "asd")

// 6 - typeof Type Operator
const userName: string = "Diego"
const userName2: typeof userName = "João"
// const userName3: typeof userName = 22
type x = typeof userName
const userName4: x = "Juan"

// 7 - indexed acess type
type Truck = {
  km: number,
  kg: number,
  description: string
}

type Km = Truck['km']

const newTruck: Truck = {
  km: 10000,
  kg: 5000,
  description: "Caminhão para pouca carga"
}

function showKm(km: Km) {
  console.log(`O caminhão tem ${km}Km`)
}

showKm(newTruck.km)

const newCar = {
  km: 40000,
  kg: 8000,
}

showKm(newCar.km)

// 8 - Conditional expression type
interface A{}

interface B extends A {}

interface Teste {
  showName(): string
}

type myType = B extends A ? number :  string

const someVar: myType = 5
// const someVar2: myType = "Teste"

type myTypeB = Teste extends {showName(): number} ? string : boolean

// 9 - Template Literal Type
type testA = "text"

type CustomType = `some ${testA}`

const testing: CustomType = `some text`
// const testing2: CustomType = `some text 2`

type a1 = "testando"
type a2 = "Union"

type a3 = `${a1} | ${a2}`