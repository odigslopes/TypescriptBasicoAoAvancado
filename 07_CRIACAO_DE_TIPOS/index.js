"use strict";
// 1 - Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('Teste'));
// 2 - Contraints em generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Janela", price: 15.99 };
const otherObj = { name: "Carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 15.99, category: "Computadores" };
console.log(showProductName(myObj));
console.log(showProductName(otherObj));
const myCar = {
    name: "Ford",
    wheels: 4,
    engine: 2.0,
    color: "Vermelho"
};
const myPen = {
    name: "Bic",
    wheels: false,
    engine: false,
    color: "Azul"
};
console.log(myCar);
console.log(myPen);
// 4 - Type parameters
function getSomeKey(obj, key) {
    return `A chave ${[key]} está presente no objeto e seu valor é: ${obj[key]}`;
}
const server = { hd: '2TB', ram: '64GB' };
console.log(getSomeKey(server, 'hd'));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Diego",
    age: 25,
    hasDriveLicence: true
};
console.log(showCharName(myChar, 'name'));
// showCharName("teste", "asd")
// 6 - typeof Type Operator
const userName = "Diego";
const userName2 = "João";
const userName4 = "Juan";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O caminhão tem ${km}Km`);
}
showKm(newTruck.km);
const newCar = {
    km: 40000,
    kg: 8000,
};
showKm(newCar.km);
const someVar = 5;
const testing = `some text`;
