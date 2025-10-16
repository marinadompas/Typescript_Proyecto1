// 3) Saltos y rest en arrays
// Objetivo: Ignorar elementos y capturar el resto.

const reps = [12, 10, 9, 8, 8, 7];
// TODO: const [r1, r2, ...remaining] = reps;
console.log({ /*r1, r2, remaining*/ }); // Esperado: { r1:12, r2:10, remaining:[9,8,8,7] }

// Ejercicio 3: Crea una funcion, que del array de repeticiones, toma las dos primeras a variables y el resto a `remaining`.
export function cogerPrimerasYRestantes(repeticiones: number[]) {
    const [r1, r2, ...remaining] = repeticiones;
    console.log({ r1, r2, remaining });
}

cogerPrimerasYRestantes(reps);