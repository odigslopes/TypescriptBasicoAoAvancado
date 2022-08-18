// 1 - arrays
let numbers: number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

// numbers = "teste"

const nomes: string[] = ["Diego", "Vinicius"]

// nomes.push(4)

// 2 - outra sintaxe array
const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

// nums.push("teste")

console.log(nums[0])

// 3 - any
const arr1: any = [1, "teste", true, [], {nome: "Diego"}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

// 4 - parametro tipados

function soma(a: number, b: number) {
  console.log(a + b)
}

soma(4, 5)

// soma("a", "b")

// 5 - retorno de função
function greeting(name: string): string {
  return `Olá ${name}`
}

console.log(greeting("Diego"))

// 6 - funções anônimas
setTimeout(function(){

  const sallary: number = 1000

  // console.log(parseFloat(sallary))

  // console.log(sallary)

}, 2000)

// 7 - tipos de objetos
function passCoordinates(coord: {x: number, y: number}) {
  console.log("X coordinates: " + coord.x)
  console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 329, y:92.2}

passCoordinates(objCoord)

const pessoaObj:{nome: string, surname: string} = {
  nome: "Diego",
  surname: "Lopes"
}

// 8 - propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log("A: " + a)
  console.log("B: " + b)
  
  if(c) {
    console.log("C: " + c)
  }
}

showNumbers(1, 2, 3)
showNumbers(4, 5)
// showNumbers(3)


// 9 - validação de props opcionais
function advancedGreeting(firstName: string, lastName?: string) {
  
  if(lastName !== undefined) {
    return (`Olá, ${firstName} ${lastName}, tudo bem?`)
  }

  return (`Olá, ${firstName}, tudo bem?`)
}

console.log(advancedGreeting("Diego", "Lopes"))
console.log(advancedGreeting("Felipe"))

// 10 - Union types
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$: ${balance}`)  
}

showBalance(100)
showBalance("500")
// showBalance(true)

const arr2: Array<number | string | boolean> = [1, "testeteste", true]

// 11 - avançando com union types {entrega de tipo de dado}
function showUseRole(role: boolean | string) {
  if(typeof role === "boolean") {
    return "Usuário negado"
  }

  return `A função do usuário é: ${role}`  
}

console.log(showUseRole(false))
console.log(showUseRole("Admin"))

// 12 - type alias
type ID = string | number

function showId(id: ID) {
  console.log(`O ID é: ${id}`)
  
}

showId(1)
showId("200")
showId(123)

// 13 - interfaces
interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point) {
  console.log(`
    X: ${obj.x}
    Y: ${obj.y}
    Z: ${obj.z}
  `)
}

const coordObj: Point = {
  x: 11,
  y: 20,
  z: 30
}

showCoords(coordObj)

// 14 - diferença entre type alias e interface
  // interface pode ser alterada ao longo do código
  // type alias não pode ser alterada ao longo do código
interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = {name: "Diego", age: 25}

console.log(somePerson)

type personType = {
  name: string
}

// type personType = {
//   age: number
// }

// 15 - literal types
let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é: ${direction}`)
}

showDirection("left")

// 16 - non-null assertion operator { ? | } 
const p = document.getElementById("some-p") 

console.log(p!.innerText)

// 17 - BigInt
  // big int é um tipo de dado especialmente para números grandes
let n: bigint

// n = 1

n = 1000n

console.log(n)
console.log(typeof n)
console.log(n + 100n)

// 18 - symbol
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("b")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)