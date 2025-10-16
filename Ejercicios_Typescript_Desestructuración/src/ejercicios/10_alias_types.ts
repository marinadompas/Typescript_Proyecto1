// 10) Desestructurar con alias y anotaciones de tipo
// Objetivo: Alias + tipado explícito en objetos complejos.
// Enunciado: Del objeto `medida`, extrae `fx` como `forceX: number` y `fy` como `forceY: number`.

const medida = { fx: 123.4, fy: -32.1, fz: 0.0 };
// TODO: const { fx: forceX, fy: forceY }: { fx: number; fy: number } = medida;

// console.log({ forceX, forceY }); // Esperado: { forceX: 123.4, forceY: -32.1 }

// Ejercicio 10: Crea una funcion que del objeto `medida` extraiga `fx` como `forceX: number` y `fy` como `forceY: number`.
export function extraerFuerzas(medida: { fx: number; fy: number; fz: number }): { forceX: number; forceY: number } {
  const { fx: forceX, fy: forceY }: { fx: number; fy: number } = medida;
  return { forceX, forceY };
}

console.log(extraerFuerzas(medida));