// 1 - Tipos de objetos para função com interface
interface Product {
  name: string
  price: number
  isAvailable: boolean
}

function showProductDetails(product: Product) {
  console.log(`O nome do produto é ${product.name} e o preço é ${product.price}`)
    if(product.isAvailable) {
      console.log("Produto disponível")
    } 
    return console.log("Produto indisponível")
}

const shirt: Product = {
  name: "Camisa",
  price: 69.99,
  isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: "Terno", price: 199.99, isAvailable: false})

// 2 - propriedade opcional em interface
interface User {
  email: string,
  role?: string
}

function showUserDetails(user: User) {
  console.log(`O email do usuário é ${user.email}`)
  if(user.role) {
    console.log(`O usuário é ${user.role}`)
  } else {
    console.log("O usuário não possui role")
  }  
}

const u1:User = {email: "diego@email.com", role: "admin"}
const u2:User = {email: "joao@email.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - propriedades readonly em interface
interface Car {
  brand: string,
  readonly wheels: number
}

const jetta: Car = {
  brand: "Volkswagen",
  wheels: 4
}

console.log(jetta)

// jetta.wheels = 5 -> nao permite mudanças.

// 4 - index signature em interface
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10
}

coords.y = 15
// coords.z = "teste" -> nao condiz com tipo númerico

console.log(coords)

// 5 - extending types em interface
interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superPower: string[]
}

const diego: Human = {
  name: "Diego",
  age: 25
}

const joao: SuperHuman = {
  name: "João",
  age: 30,
  superPower: ["Super força", "Super velocidade"]
}

console.log(diego)
console.log(joao)
console.log(joao.superPower[1]) 

// 6 - intersection types em interface
interface Character {
  name: string
}

interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Character & Gun

const ronaldo: HumanWithGun = {
  name: "Ronaldo",
  type: "AK-47",
  caliber: 7.62
}

console.log(ronaldo)
console.log(ronaldo.type)

// 7 - ReadOnlyArray -> Não permite alteração em listas.
let myArray: ReadonlyArray<string> = ["Banana", "Maçã", "Melancia"]

// myArray[3] = "Abacaxi"

console.log(myArray)

myArray.forEach((item) => {
  console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
  return `Fruta: ${item}`
})

console.log(myArray)

// myArray[0] = "Abacaxi" -> não permite alteração

// 8 - Tuplas 
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6] -> excesso
// const mixedArray: fiveNumbers = [1, 2, 3, 4, 5, "teste"] -> tipos diferentes

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Diego", 25]
console.log(anotherUser[0])

anotherUser[0] = "João"
console.log(anotherUser[0])

// 9 - tupla com readonly
function showNumbers(numbers: readonly [number, number]) {  
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([4, 8])