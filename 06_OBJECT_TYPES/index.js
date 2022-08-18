"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e o preço é ${product.price}`);
    if (product.isAvailable) {
        console.log("Produto disponível");
    }
    return console.log("Produto indisponível");
}
const shirt = {
    name: "Camisa",
    price: 69.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Terno", price: 199.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O email do usuário é ${user.email}`);
    if (user.role) {
        console.log(`O usuário é ${user.role}`);
    }
    else {
        console.log("O usuário não possui role");
    }
}
const u1 = { email: "diego@email.com", role: "admin" };
const u2 = { email: "joao@email.com" };
showUserDetails(u1);
showUserDetails(u2);
const jetta = {
    brand: "Volkswagen",
    wheels: 4
};
console.log(jetta);
let coords = {
    x: 10
};
coords.y = 15;
// coords.z = "teste" -> nao condiz com tipo númerico
console.log(coords);
const diego = {
    name: "Diego",
    age: 25
};
const joao = {
    name: "João",
    age: 30,
    superPower: ["Super força", "Super velocidade"]
};
console.log(diego);
console.log(joao);
console.log(joao.superPower[1]);
const ronaldo = {
    name: "Ronaldo",
    type: "AK-47",
    caliber: 7.62
};
console.log(ronaldo);
console.log(ronaldo.type);
// 7 - ReadOnlyArray -> Não permite alteração em listas.
let myArray = ["Banana", "Maçã", "Melancia"];
// myArray[3] = "Abacaxi"
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
// const myNumberArray2: fiveNumbers = [1, 2, 3, 4, 5, 6] -> excesso
// const mixedArray: fiveNumbers = [1, 2, 3, 4, 5, "teste"] -> tipos diferentes
console.log(myNumberArray);
const anotherUser = ["Diego", 25];
console.log(anotherUser[0]);
anotherUser[0] = "João";
console.log(anotherUser[0]);
// 9 - tupla com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([4, 8]);
