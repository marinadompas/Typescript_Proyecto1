// 4) Anidación de objetos
// Objetivo: Extraer propiedades anidadas.
// Enunciado: De `sesion`, extrae `usuario.nombre` y `metrics.emg.max` como `maxEMG`.

const sesion = {
  usuario: { id: 101, nombre: "Carmen" },
  metrics: { emg: { max: 0.87, mean: 0.42 } }
};
// TODO: const { usuario: { nombre }, metrics: { emg: { max: maxEMG } } } = sesion;

console.log({ /*nombre, maxEMG*/ }); // Esperado: { nombre: "Carmen", maxEMG: 0.87 }

// Ejercicio 4: Crea una funcion que de `sesion`, extrae `usuario.nombre` y `metrics.emg.max` como `maxEMG`.
export const extraerDatosSesion = (sesion: { usuario: { id: number; nombre: string }; metrics: { emg: { max: number; mean: number } } }) => 
{ const { usuario: { nombre }, metrics: { emg: { max: maxEMG } } } = sesion;
  console.log({ nombre, maxEMG });
};

extraerDatosSesion(sesion);