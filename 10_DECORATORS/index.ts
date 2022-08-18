// -> Decorators
  /*
    * Decorators podem adicionar funcionalidades extras a classes e funções;
    * Basicamente criamos novas funções, que são adicionadas a partir de um @nome;
    * Esta função será chamada assim que o item que foi definido o decorator for executado;
    * Para habilitar precisamos adicionar a importação do decorator no arquivo tsconfig.json;
  */

// -> Primeiro Decorator
  /*
    * Vamos criar um decorator como uma function;
    * Ele pode trabalhar ocm argumentos especiais que são: target, propertyKey e descriptor;
    * Estes são os grandes trunfos do decorator, pois não dão informação do local em que ele foi executado;
  */

// 1 - exemplos decorator
function myDecorator() {
  
  console.log("Iniciando o decorator!");
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
    ) {    
      console.log("Decorator executado");
      console.log(target);
      console.log(propertyKey);
      console.log(descriptor);
  }
}

class MyClass {
  name!: string;

  @myDecorator()
  testing() {
    console.log("terminando execução do método");
  }
}

const myObj = new MyClass();
myObj.testing();

// 2 - Mútiplos decorators
function  a() {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executando a.");
  }
}

function  b() {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executando b.");
  }
}

function  c() {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executando c.");
  }
}

class MultipleDecorators {
  
  @c()
  @a()
  @b()
  testing() {
    console.log("terminando execução");
  }
}

const mutilpe = new MultipleDecorators();
mutilpe.testing();

// 3 - Decorator de classe
function classDec(constructor: Function) {
  console.log(constructor.name);
  if ( constructor.name === "User" ) {
    console.log("Criando usuário!");
  }
}

@classDec
class User {
  name;


  constructor(name: string) {
    this.name = name;
  }
}

const diego = new User("Diego")

console.log(diego)

// 4 - Decorator de método
function enumerable(value: boolean) {
  return function(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  }
}

class Machine {
  name

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName() {
    console.log(this)
    return `O nome da máquina é: ${this.name}`;
  }
}

const trator = new Machine("Trator");
console.log(trator.showName());
trator.showName();

// 5 - Acessor Decorator
class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`;
  }
  
  @enumerable(true)
  get showAge() {
    return `Idade do monstro: ${this.age}`;
  }
}

const zulo = new Monster("Zulo", 15);

console.log(zulo);

// 6 - Property decorator
// 1 - 00001 - 5 casas.
function formatNumber() {
  return function(target: Object, propertyKey: string) {

    let value: string

    const getter = function() {
      return value;
    }

    const setter = function(newVal: string) {
      value = newVal.padStart(5, "0");
    }

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    });
  };
}

class ID {
  @formatNumber()
  id

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID("123");

console.log(newItem);
console.log(newItem.id);

// 7 - Exemplos real com class decorator
function createdData(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdData
class Book {
  id
  createdAt?: Date

  constructor(id: number) {
    this.id = id;
  }
}

@createdData
class Pen {
  id
  createdAt?: Date

  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(12);
const newPen = new Pen(55);

console.log(newBook);
console.log(newPen);

console.log(newBook.createdAt);
console.log(newPen.createdAt);

// 8 - Exemplo real: Method Decorator
function checkIfUserPosted() {

  return function(
    target: Object, 
    key: string | Symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    // console.log(childFunction);
    descriptor.value = function(...args: any[]) {
      if (args[1] === true) {
        console.log("Usuário não pode postar");
        return null        
      } else {
        return childFunction.apply(this, args)        
      }
    }
    return descriptor;
  }
}


class Post {
  alreadyPosted = false

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`Post do usuário: ${content}`);
    
  } 

}

const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);

newPost.post("Meu segundo post!", newPost.alreadyPosted);

newPost.post("Meu terceiro post!", newPost.alreadyPosted);

// 9 - Exemplo real: Property Decorator
function MaxCharacter(limit: number) {
  
  return function(target: Object, propertyKey: string) {
    
    let value: string;

    const getter = function() {
      return value;
    }

    const setter = function(newVal: string) {
      if(newVal.length > limit) {
        console.log(`Os caracteres exigem no máximo ${limit} dígitos.`)
      } else {
        value = newVal;
      }
    }
    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    })
  }
}

class Admin {
  @MaxCharacter(10)
  usename

  constructor(username: string) {
    this.usename = username;
  }
}

let joaquim = new Admin("Joaquim102030");
console.log(joaquim);
let juarez = new Admin("Juarez");
console.log(juarez);

