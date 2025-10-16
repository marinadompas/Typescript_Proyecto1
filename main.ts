import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

/* Importar ejercicios y ejecutarlos con sus respectivas funciones
import { ejecutarEjer1 } from './Ejercicios/ejer1.ts'
import { ejecutarEjer2 } from './Ejercicios/ejer2.ts'
import { ejecutarEjer3 } from './Ejercicios/ejer3.ts'
import { ejecutarEjer4 } from './Ejercicios/ejer4.ts'
import { ejecutarEjer5 } from './Ejercicios/ejer5.ts'
import { ejecutarEjer6 } from './Ejercicios/ejer6.ts'
import { ejecutarEjer7 } from './Ejercicios/ejer7.ts'
ejecutarEjer1();
ejecutarEjer2();
ejecutarEjer3();
ejecutarEjer4();
ejecutarEjer5();
ejecutarEjer6();
ejecutarEjer7();
*/
// Importar pruebas y ejecutarlas con sus respectivas funciones
import { ejecutarP1 } from './prueba_de_typescript/prueba1.ts'
import { ejecutarP2 } from './prueba_de_typescript/prueba2.ts'
ejecutarP1();
ejecutarP2();

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)