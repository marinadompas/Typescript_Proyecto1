// 7) Desestructurar en un bucle
// Objetivo: Desestructurar objetos dentro de for...of.
// Enunciado: Imprime `nombre` y `mejorMarca` de cada atleta.

/*
const atletas = [
  { nombre: "Lucía", mejorMarca: 11.23, prueba: "100m" },
  { nombre: "Mario", mejorMarca: 50.1, prueba: "400m" },
];

// for (const { nombre, mejorMarca } of atletas) {
// console.log(`${nombre}: ${mejorMarca}`);*/

// Ejercicio 7: Dado un array de objetos `atletas`, usa desestructuración en un bucle para imprimir `nombre` y `mejorMarca` de cada atleta.
export function imprimirAtletas(atletas: { nombre: string; mejorMarca: number; prueba: string }[]): void {
  for (const { nombre, mejorMarca } of atletas) {
    console.log(`${nombre}: ${mejorMarca}`);
  }
}

imprimirAtletas([
  { nombre: "Lucía", mejorMarca: 11.23, prueba: "100m" },
  { nombre: "Mario", mejorMarca: 50.1, prueba: "400m" },
]);