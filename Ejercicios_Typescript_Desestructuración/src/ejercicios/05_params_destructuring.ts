// 5) Desestructurar en parámetros de función
// Objetivo: Usar desestructuración directamente en la firma.
// Enunciado: Implementa `formaTea` (formatea) para imprimir `marca` con default 0 y `unidad` con default "ms".

type Resultado = { marca?: number; unidad?: string };

// Ejercicio 5: Crea una funcion `formaTea` que reciba un objeto con las propiedades opcionales `marca` (número) y `unidad` (cadena).
export function extraerDatosEstudiante(data: [string, number, string[]]) {
  const [nombre, edad, asignaturas] = data;
  return { nombre, edad, asignaturas };
}

extraerDatosEstudiante(["Luis", 21, ["Matemáticas", "Física", "Química"]]);