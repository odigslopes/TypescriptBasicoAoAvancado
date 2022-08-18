// 1 - Importação de arquivos
import importGreet from "./greet";

importGreet();

// 2 - Import com variáveis
import { x } from "./variable";

console.log(x);

// 3 - Multiplas importações
import {a, b, myFunction} from "./multiple";
console.log(a);
console.log(b);
myFunction();

// 4 - Import com ALIAS
import { someName as name } from "./changename";
console.log(name);

// 5 - Import tudo " * "
import * as myNumbers from "./numbers";
console.log(myNumbers);
const nx = myNumbers.n1;
console.log(nx);
myNumbers.showNumber();

// 6 - Importando tipos ou interfaces
import { Human } from "./mytype";

class User implements Human {
  name
  age

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const Digs = new User("Digs", 25);
console.log(Digs);