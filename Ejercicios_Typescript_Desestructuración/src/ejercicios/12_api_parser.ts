// 12) Mini–reto: parser de respuesta "API"
// Objetivo: Combinar todo: arrays, objetos, defaults, renombrado.
// Enunciado: Dada la respuesta con atletas, genera un array normalizado {id, name, sport, country}
// con defaults sport="unknown", country="ES".

const response = {
  results: [
    { id: 1, nombre: "Marta", meta: { sport: "padel", country: "ES" } },
    { id: 2, nombre: "Luis",  meta: { sport: "run" } },
    { id: 3, nombre: "Aya" } // meta ausente
  ]
};

// const normalized = response.results.map((item) => {
// });
// console.log(normalized);
// Esperado:[{ id:1, name:"Marta", sport:"padel", country:"ES" },{ id:2, name:"Luis",  sport:"run",   country:"ES" },
//   { id:3, name:"Aya",   sport:"unknown", country:"ES" }]

// Ejercicio 12: Crea una funcion que dada la respuesta con atletas, genera un array normalizado {id, name, sport, country}
// con defaults sport="unknown", country="ES".
export function normalizedApi(response: { results: { id: number; nombre: string; meta?: { sport?: string; country?: string } }[] }) {
  return response.results.map(({ id, nombre: name, meta: { sport = "unknown", country = "ES" } = {} }) => ({
    id,
    name,
    sport,
    country
  }));
}