// 1 - funções que não retornam nada são chamadas de funções void
function withoutReturn(): void {
  console.log("Esta função não tem retorno!")
  // return 1
}

withoutReturn()

// 2 - callback como argumento de uma função
function greeting(name: string): string{
  return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
  
  console.log("Preparando a função!")
  const greet = f(userName)
  console.log(greet)
}

preGreeting(greeting, "Diego")
preGreeting(greeting, "Luan")

// 3 - generic functions (funções genéricas)
function firstElement<T>(arr: T[]): T {
  return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["Diego", "Luan"]))
// console.log(firstElement("teste")

function mergeObjects<U, T>(obj1: U, obj2: T){
  return {
    ...obj1, 
    ...obj2
  }
}

const newObject = mergeObjects({ name: "Diego" }, { age: 25, job: "Developer" })

console.log(newObject)
  
// 4 - constraints on generic types (contraints em tipos genéricos)
function biggestNumber<T extends number | string >(a: T, b: T): T {
  let biggest: T

  if(+a > +b) {
    biggest = a
  } else {
    biggest = b
  }

  return biggest
}

console.log(biggestNumber(5, 3))
console.log(biggestNumber("12", "5"))
// console.log(biggestNumber("12", 5))

// 5 - especificar tipo de argumentos
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [5, 6]))
console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "teste2"]))

// 6 - parâmetro opcionais
function modernGreeting(name: string, greet?: string) {
  if(greet) {
    return `Olá ${greet} ${name}, tudo bem?`
  }
  
  return `Hello ${name}`  
}

console.log(modernGreeting("Ronaldo"))
console.log(modernGreeting("Diego", "Mr."))

// 7 - parâmetro default(padrão)
function somaDefault(n: number, m = 10): number {
  return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(10, 20))

// 8 - o tipo unknown(desconhecido)
function doSomething(x: unknown) {
  if(Array.isArray(x)) {
    console.log(x[0])    
  } else if(typeof x === "number") { 
    console.log("X é um número")
  }
}

doSomething([1, 2, 3])
doSomething(10)

// 9 - tipo never(never é um tipo que nunca retorna)
function  showErrorMessage(msg: string): never {
  throw new Error(msg)
}

// showErrorMessage("Erro!")

// 10 - rest parameters(parâmetros rest)
function sumAll(...numbers: number[]) {
  return numbers.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5))
console.log(sumAll(5, 200, 200))
// console.log(sumAll("teste")) 

// 11 - destructuring (desestruturação em parâmetro)
function showProductDetails({name, price}: {name: string, price: number}): string {
  return `O nome do produto é ${name} e o preço é ${price}`
}

const shirt = {name: "Camisa", price: 49.99}

console.log(showProductDetails(shirt))
// console.log(showProductDetails({name: "teste", age: 40}))
// console.log(showProductDetails([1,2]))

