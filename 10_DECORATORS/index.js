"use strict";
// -> Decorators
/*
  * Decorators podem adicionar funcionalidades extras a classes e funções;
  * Basicamente criamos novas funções, que são adicionadas a partir de um @nome;
  * Esta função será chamada assim que o item que foi definido o decorator for executado;
  * Para habilitar precisamos adicionar a importação do decorator no arquivo tsconfig.json;
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// -> Primeiro Decorator
/*
  * Vamos criar um decorator como uma function;
  * Ele pode trabalhar ocm argumentos especiais que são: target, propertyKey e descriptor;
  * Estes são os grandes trunfos do decorator, pois não dão informação do local em que ele foi executado;
*/
// 1 - exemplos decorator
function myDecorator() {
    console.log("Iniciando o decorator!");
    return function (target, propertyKey, descriptor) {
        console.log("Decorator executado");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("terminando execução do método");
    }
}
__decorate([
    myDecorator()
], MyClass.prototype, "testing", null);
const myObj = new MyClass();
myObj.testing();
// 2 - Mútiplos decorators
function a() {
    return function (target, propertyKey, descriptor) {
        console.log("executando a.");
    };
}
function b() {
    return function (target, propertyKey, descriptor) {
        console.log("executando b.");
    };
}
function c() {
    return function (target, propertyKey, descriptor) {
        console.log("executando c.");
    };
}
class MultipleDecorators {
    testing() {
        console.log("terminando execução");
    }
}
__decorate([
    c(),
    a(),
    b()
], MultipleDecorators.prototype, "testing", null);
const mutilpe = new MultipleDecorators();
mutilpe.testing();
// 3 - Decorator de classe
function classDec(constructor) {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log("Criando usuário!");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec
], User);
const diego = new User("Diego");
console.log(diego);
// 4 - Decorator de método
function enumerable(value) {
    return function (target, propertyKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
trator.showName();
// 5 - Acessor Decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `Nome do monstro: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro: ${this.age}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true)
], Monster.prototype, "showAge", null);
const zulo = new Monster("Zulo", 15);
console.log(zulo);
// 6 - Property decorator
// 1 - 00001 - 5 casas.
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], ID.prototype, "id", void 0);
const newItem = new ID("123");
console.log(newItem);
console.log(newItem.id);
// 7 - Exemplos real com class decorator
function createdData(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
};
Book = __decorate([
    createdData
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
};
Pen = __decorate([
    createdData
], Pen);
const newBook = new Book(12);
const newPen = new Pen(55);
console.log(newBook);
console.log(newPen);
console.log(newBook.createdAt);
console.log(newPen.createdAt);
// 8 - Exemplo real: Method Decorator
function checkIfUserPosted() {
    return function (target, key, descriptor) {
        const childFunction = descriptor.value;
        // console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuário não pode postar");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
newPost.post("Meu segundo post!", newPost.alreadyPosted);
newPost.post("Meu terceiro post!", newPost.alreadyPosted);
// 9 - Exemplo real: Property Decorator
function MaxCharacter(limit) {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`Os caracteres exigem no máximo ${limit} dígitos.`);
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.usename = username;
    }
}
__decorate([
    MaxCharacter(10)
], Admin.prototype, "usename", void 0);
let joaquim = new Admin("Joaquim102030");
console.log(joaquim);
let juarez = new Admin("Juarez");
console.log(juarez);
