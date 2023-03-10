// // 1 - VAR, LET E CONST

// var x = 10
// var y = 15

// if (y > 10) {
//   var x = 5
//   console.log(x)
// }
// console.log(x)

// let a = 10
// let b = 15

// if (b > 10) {
//   let a = 5
//   console.log(a)
// }

// console.log(a)

// let i = 100

// for (let i = 0; i < 3; i++) {
//   console.log(`PASSO FOR: ${i}`)
// }

// console.log(i)

// function logName() {
//   const name = "Diego"
//   console.log(name)
// }

// const name = "João"
// logName()
// console.log(name)

// // 2 - ARROW FUNCTIONS
// const sum = function sum(a, b) {
//   return a + b
// }

// const arrowSum = (a, b) => a + b

// console.log(sum(5, 5))
// console.log(arrowSum(5, 5))

// const greeting = (name) => {
//   if (name) {
//     return "Olá " + name + "!"

//   } else {
//     return "Olá!"
//   }
// }

// console.log(greeting("Diego"))
// console.log(greeting())

// const testeArrow = () => console.log("Testou!")

// testeArrow()

// const user = {
//   name: "Reimond",
//   sayUserName() {
//     var self = this
//     setTimeout(function () {
//       console.log(this)
//       console.log("Username: " + self.name)
//     }, 500)
//   },
//   sayUserNameArrow() {
//     setTimeout(() => {
//       console.log(this)
//       console.log("Username: " + this.name)
//     }, 700)
//   }
// }

// // user.sayUserName()
// // user.sayUserNameArrow()

// // 3 - FILTER
// const arr = [1, 2, 3, 4, 5]

// console.log(arr)

// const highNumbers = arr.filter((n) => {
//   if (n >= 3) {
//     return n
//   }
// })
// console.log(highNumbers)

// const users = [
//   { name: "Diego", available: true },
//   { name: "Ronaldo", available: false },
//   { name: "Joaquim", available: true },
//   { name: "Alberto", available: false }
// ]

// const availableUsers = users.filter((user) => user.available)
// const notAvailableUsers = users.filter((user) => !user.available)

// console.log(availableUsers)
// console.log(notAvailableUsers)

// 4 - MAP
const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Mouse", price: 39.99, category: "Eletronicos" },
  { name: "Fogão", price: 10.99, category: "Eletrodomésticos" },
  { name: "Alvejante", price: 10.99, category: "Limpeza" },
  { name: "Blusa", price: 99.99, category: "Roupas" },
]

products.map((product) => {
  if (product.category === "Roupas") {
    product.onSale = true;
  }
})

console.log(products)

// 5 - TEMPLATE LITERALS
const userName = "Diego"
const age = 25

console.log(`O nome do usuário é ${userName} e ele tem ${age} anos.`)


// 6 - DESTRUCTURING
const fruits = ["Maçã", "Banana", "Melão"]

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f2)
console.log(f3)

const productDetails = {
  name: "Teclado",
  price: 49.99,
  category: "Periféricos",
  color: "Preto"
}

const {
  name: productName,
  price,
  category: productCategory,
  color
} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory} e a cor é ${color}`)

// 7 - SPREAD OPERATOR
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

const carName = { name: "Gol" }
const carBrand = { name: "VW" }
const otherInfos = { km: 10000, price: 59999 }

const car = { ...carName, ...carBrand, ...otherInfos, wheels: 4 }
console.log(car)


// 8 - CLASSES
class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100)
  }
}

const shirt = new Product("Camisa gola V", 20)

console.log(shirt.name)
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(50))

const tenis = new Product("Tenis azul", 120)
console.log(tenis.productWithDiscount(20))

// 9 - HERANÇA
class ProductWithAtrributes extends Product {
  constructor(name, price, colors) {
    super(name, price)
    this.colors = colors
  }

  showColors() {
    console.log("As cores são: ")
    this.colors.forEach((color) => {
      console.log(color)
    })
  }
}

const hat = new ProductWithAtrributes("Chapéu", 29.99, ["Preto", "Azul", "Verde"])

console.log(hat.name)

console.log(hat.productWithDiscount(30))
hat.showColors()
