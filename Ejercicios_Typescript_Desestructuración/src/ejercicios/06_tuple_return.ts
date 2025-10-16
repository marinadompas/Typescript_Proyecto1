// 6) Retorno múltiple con arrays (tuplas)
// Objetivo: Desestructurar una tupla de retorno.
// Enunciado: `calculaRango` devuelve [min, max]. Desestructura al recibir.

/* function calculaRango(valores: number[]): [number, number] {
  const min = Math.min(...valores);
  const max = Math.max(...valores);
  return [min, max];
}

const datos = [12, 9, 17, 15];
const [min, max] = calculaRango(datos);
console.log(/*`min=${min}, max=${max}`*/; // Esperado: min=9, max=17 

// Ejercicio 6: Crea una función `calculaRango` que reciba un array de números y devuelva una tupla con el valor mínimo y máximo.
export function extraerDatosPais(pais: { nombre: string; capital: string; idiomas: string[]; poblacion: number }) {
  return {
    nombre: pais.nombre,
    capital: pais.capital,
    idiomas: pais.idiomas,
    poblacion: pais.poblacion,
  };
}

extraerDatosPais({nombre: "España", capital: "Madrid", idiomas: ["Español", "Catalán", "Gallego"], poblacion: 47350000});