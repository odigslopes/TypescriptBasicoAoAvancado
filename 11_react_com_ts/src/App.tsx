import React, { createContext } from "react";
// 4 - importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - useState
import State from "./components/State";

// 10 - Utilizando Contexto
import Context from "./components/Context";

// 8 - type
type textOrNull = string | null;
type fixed = "Isso" | "Ou" | "Aquilo"

// 9 - context
interface IAppContext {
  language: string,
  framework: string,
  project: number,
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {

  // 1 - Variáveis
  const name: string = "Diego";
  const age: number = 25;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  }

  // 8 - type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;
  // mySecondText = "Outro texto";

  const testFixed: fixed = "Isso";

  // 9 - context
  const contextValue: IAppContext = {
    language: "Javascript",
    framework: "Express",
    project: 5,
  }
  
  return (
    <AppContext.Provider value={contextValue}>
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Meu nome é {name}</h2>
      <p>Idade: {age}</p>
      {
        isWorking && <p>Está trabalhando!</p>
      }
      {/* 2 - Funções */}
      <h3>{userGreeting(name)}</h3>
      {/* 4 - importação de componentes */}
      <FirstComponent />
      {/* 5 - desestruturando props */}
      <SecondComponent name="Segundo"/>
      <Destructuring 
        title="Typescript"
        content="Conteúdo par"
        commentsQty={16}
        tags={["ts", "js"]}
        category={Category.TS}
      />
      <Destructuring 
        title="Python" 
        content="Conteúdo impar" 
        commentsQty={7} 
        tags={["banco de dados", "dados"]}
        category={Category.P} 
      />
      <State />
      {myText && <p>Tem texto na variável</p>}
      {mySecondText && <p>Tem texto na variável</p>}
      {/* 10 - Utilizando Contexto */}
      <Context />
    </div>
    </AppContext.Provider>
  );
}

export default App;