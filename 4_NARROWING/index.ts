// 1 - type guard
function sum(a: number | string, b: number | string) {
  
  if(typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossível realizar a soma!")
  }
}

sum("4", "59")
sum(12, 42.3)
sum("5", 6)

// 2 - checando se o valor existe
function operations(arr: number[], operation?: string | undefined ) {
  if(operation) {
    if(operation === "sum") {
      const sum = arr.reduce((i, total) => i + total)
      console.log(sum)
    } else if (operation === "multiply") {
      const multiply = arr.reduce((i, total) => i * total)
      console.log(multiply)
    }
    
  } else {
    console.log("Por favor, defina uma operação")
  }
}

operations([1, 2, 3])
operations([1, 2, 3], "sum")
operations([2, 2, 3], "multiply")

// 3 - operador instanceof
class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name)  
  }
}

const diego = new User("Diego")
const luan = new SuperUser("Luan")

console.log(diego)
console.log(luan)

function userGreeting(user: object) {
  if(user instanceof SuperUser) {
    console.log(`Olá ${user.name}, seja bem vindo!`)
  } else if (user instanceof User) {
    console.log(`Olá ${user.name}!`)
  }  
}

userGreeting(diego)
userGreeting(luan)

// 4 - operador in = checando se existe uma propriedade no objeto
class  Dog {
  name
  breed

  constructor(name: string, breed?: string) {
    this.name = name
    if(breed) {
      this.breed = breed
    }
  }
}

const luna = new Dog("Luna")
const bob = new Dog("Bob", "Pittbull")

function showDogDetails(dog: Dog) {
  if('breed' in dog) {
    console.log(`O cachorro ${dog.name} é da raça ${dog.breed}`)
  } else {
    console.log(`O cachorro ${dog.name} não possui raça`)
  }
}

showDogDetails(luna)
showDogDetails(bob)