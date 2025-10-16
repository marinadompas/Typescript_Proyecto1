// 1) Desestructuración básica de arrays
// Dado un array de tres marcas en un test de sprint (en s), coge el primer y tercer valor.

const ver = [3.12, 3.05, 2.98];
// Usar desestructuración para obtener primero y tercero. Ejemplo: const [primero, /*...*/, tercero] = sprints;
const [primero, , tercero] = ver;
console.log(primero, tercero); // primero: 3.12, tercero: 2.98

// Ejercicio 1: Devolver primer y tercer valor usando desestructuración con "hueco" para saltar el segundo.
export function cogerPrimeroTercero(ver: number[]): [number, number] {
  const [primero, , tercero] = ver;
  return [primero, tercero];
}

cogerPrimeroTercero(ver);