// 2) Renombrado y valores por defecto (objetos)
// Objetivo: Renombrar propiedades y poner defaults.
const jugador = { nombre: "Ana", edad: 22 };

// Renombrar `nombre` como `athlete` y asignar un valor por defecto a `club`
// const { nombre: athlete, club = "Sin club" } = jugador;
// console.log({ athlete, club }); // Esperado: { athlete: "Ana", club: "Sin club" }

// Ejercicio 2: Crea una función para extraer la variable `nombre` como `athlete` y `club` (por defecto "Sin club").
export function extraerDatosJugador(jugador: { 
    nombre: string; 
    edad: number; 
    club?: string }): 
{ athlete: string; club: string } {
  const { nombre: athlete, club = "Sin club" } = jugador;
  return { athlete, club };
}
extraerDatosJugador (jugador);