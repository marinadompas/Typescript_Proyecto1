// 11) Desestructurar en callbacks (map, filter)
// Objetivo: Desestructurar parámetros en funciones anónimas.
// Enunciado: Mapea `jugadores` para obtener un array de strings "Nombre (pos)".

const jugadores = [
  { nombre: "Sara", pos: "PV", dorsal: 9 },
  { nombre: "Joel", pos: "PT", dorsal: 1 },
];

// TODO: const etiquetas = jugadores.map(({ nombre, pos }) => `${nombre} (${pos})`);
// console.log(etiquetas); // Esperado: ["Sara (PV)", "Joel (PT)"]

// Ejercicio 11: Crea una funcion que mapee `jugadores` para obtener un array de strings "Nombre (pos)".
export function mapJugadores(jugadores: { nombre: string; pos: string; dorsal: number }[]): string[] {
  return jugadores.map(({ nombre, pos }) => `${nombre} (${pos})`);
}