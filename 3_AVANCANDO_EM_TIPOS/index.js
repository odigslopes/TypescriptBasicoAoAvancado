"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste"
const nomes = ["Diego", "Vinicius"];
// nomes.push(4)
// 2 - outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
// nums.push("teste")
console.log(nums[0]);
// 3 - any
const arr1 = [1, "teste", true, [], { nome: "Diego" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 - parametro tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// soma("a", "b")
// 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Diego"));
// 6 - funções anônimas
setTimeout(function () {
    const sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - tipos de objetos
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 92.2 };
passCoordinates(objCoord);
const pessoaObj = {
    nome: "Diego",
    surname: "Lopes"
};
// 8 - propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// showNumbers(3)
// 9 - validação de props opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return (`Olá, ${firstName} ${lastName}, tudo bem?`);
    }
    return (`Olá, ${firstName}, tudo bem?`);
}
console.log(advancedGreeting("Diego", "Lopes"));
console.log(advancedGreeting("Felipe"));
// 10 - Union types
function showBalance(balance) {
    console.log(`O saldo da conta é R$: ${balance}`);
}
showBalance(100);
showBalance("500");
// showBalance(true)
const arr2 = [1, "testeteste", true];
// 11 - avançando com union types {entrega de tipo de dado}
function showUseRole(role) {
    if (typeof role === "boolean") {
        return "Usuário negado";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUseRole(false));
console.log(showUseRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("200");
showId(123);
function showCoords(obj) {
    console.log(`
    X: ${obj.x}
    Y: ${obj.y}
    Z: ${obj.z}
  `);
}
const coordObj = {
    x: 11,
    y: 20,
    z: 30
};
showCoords(coordObj);
const somePerson = { name: "Diego", age: 25 };
console.log(somePerson);
// type personType = {
//   age: number
// }
// 15 - literal types
let test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
// 16 - non-null assertion operator { ? | } 
const p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - BigInt
// big int é um tipo de dado especialmente para números grandes
let n;
// n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 18 - symbol
let symbolA = Symbol("a");
let symbolB = Symbol("b");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
