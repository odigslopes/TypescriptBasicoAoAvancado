"use strict";
// 1 - Campo em classe
class User {
}
const diego = new User();
console.log(diego);
diego.name = "Diego";
// diego.job = "Software Engineer"
console.log(diego);
// 2 - Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const juan = new NewUser("Juan", 40);
console.log(juan);
// const pedro = new NewUser("Pedro")
// 3 - campos readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const gol = new Car("Gol");
console.log(gol);
console.log(gol.wheels);
gol.name = "Gol turbo";
// gol.wheels = 3
console.log(gol);
// 4 - Herança e Super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroy = new KillerMachine("Destroy", 4);
console.log(trator);
console.log(destroy);
// 5 - Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Hi stranger!`);
    }
}
const digs = new Dwarf("Digs");
console.log(digs.name);
digs.greeting();
console.log(digs);
// 6 - O "this"
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 450);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
// 7 - Utilizando getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const DiegoLopes = new Person("Diego", "Lopes");
console.log(DiegoLopes.name);
console.log(DiegoLopes.fullName);
// 8 -  Utilizando setters
class Coords {
    set fillX(x) {
        if (x == 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y == 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `o valor de X: ${this.x}, o valor de Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 12;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello world!!");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é: ${this.title}`;
    }
}
const myPost2 = new TestingInterface("Hello world!");
console.log(myPost2.itemTitle());
// 10 - Override de métodos
class Base {
    someMethod() {
        console.log("Base method");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Testando someMethod");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - Visibilidade de métodos
// 11.1 - Public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
console.log(cInstance.x);
const dInstance = new C();
console.log(cInstance.x);
// 11.2 - Protected
class E {
    constructor() {
        this.x = 20;
    }
    protectedMethod() {
        console.log("Este método é protegido");
    }
}
class F extends E {
    showx() {
        console.log("X: " + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showx();
fInstance.showProtectedMethod();
// 11.3 - Private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Private method");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObject = new PrivateClass();
// console.log(pObject.name)
console.log(pObject.showName());
// console.log(pObject.privateMethod())
pObject.showPrivateMethod();
// 12 - Static Members
class StaticMembers {
    static staticMethod() {
        console.log("sou metodo estático");
    }
}
StaticMembers.prop = "Test static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 13 - Generic Class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
    get showSecond() {
        return `O second é: ${this.second}`;
    }
}
const newItem = new Item("Caixa", "Surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.showFirst);
console.log(newItem.showSecond);
console.log(typeof newItem.showSecond);
const secondItem = new Item(12, true);
console.log(secondItem.showFirst);
console.log(secondItem.showSecond);
// 14 - Parameters properties
/*
 * Parameters properties é um recurso para definir a privacidade, nome e tipo das propriedades no constructor;
 * Isso resume um pouco a sintaxe das nossas classes;
*/
class ParametersProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `A quantidade total é: ${this.qty}`;
    }
    get showPrice() {
        return `O preço é: ${this.price}`;
    }
}
const newShirt = new ParametersProperties("Blusa", 5, 119.99);
console.log(newShirt.name);
// console.log(newShirt.price)
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
// 15 - Class Expressions
/*
  * Class Expressions é um recurso para criar uma classe anônima;
  * Podemos também utilizar generics junto deste recurso;
  * Vamos encapsular a classe em uma variável;
*/
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pClass = new myClass("Diego");
console.log(pClass);
console.log(pClass.name);
// 16 - Abastract Class
/*
  * Abastract Class é um recurso para servir como um molde de outra classe;
  * Todos os métodos dela devem ser implementados nas classes que a herdam;
  * E também não podemos instanciar objetos a partir destas classes;
*/
class AbstractClass {
}
// const newObj = new AbstractClass();
class AbastractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractObj = new AbastractExample("Juliana");
newAbstractObj.showName();
// 17 - Relações entre classes
/*
  * Podemos criar um objeto com base em outra classe;
  * Quando as classes são idênticas o TS não reclama sobre esta ação
  * Precisamos que as duas sejam extamente iguais;
*/
class Dog {
}
class Cat {
}
const doguinho = new Cat();
const gatinho = new Dog();
console.log(doguinho);
console.log(gatinho);
