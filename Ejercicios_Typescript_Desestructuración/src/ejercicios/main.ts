// Aquí se llaman a los ejercicios y sus funciones y se ejecutan:
import { cogerPrimeroTercero } from "./01_array_basic";
console.log(cogerPrimeroTercero([3.12, 3.05, 2.98])); 

import { extraerDatosJugador } from "./02_object_rename_default";
console.log(extraerDatosJugador({ nombre: "Ana", edad: 22 }));

import { cogerPrimerasYRestantes } from "./03_array_rest_skip";
console.log(cogerPrimerasYRestantes([12, 10, 9, 8, 8, 7])); 

import { extraerDatosSesion } from "./04_nested_objects";
console.log(extraerDatosSesion({usuario: { id: 101, nombre: "Carmen" },metrics: { emg: { max: 0.87, mean: 0.42 } }}));

import { extraerDatosEstudiante } from "./05_params_destructuring";
console.log(extraerDatosEstudiante(["Luis", 21, ["Matemáticas", "Física", "Química"]])); 

import { extraerDatosPais } from "./06_tuple_return";
console.log(extraerDatosPais({nombre: "España", capital: "Madrid", idiomas: ["Español", "Catalán", "Gallego"], poblacion: 47350000}));

import { imprimirAtletas } from "./07_loop_destructuring";
console.log(imprimirAtletas([{ nombre: "Lucía", mejorMarca: 11.23, prueba: "100m" },{ nombre: "Mario", mejorMarca: 50.1, prueba: "400m" }]));

import { procesaUsuario } from "./08_spread_rest_rebuild";
console.log(procesaUsuario({ id: 7, nombre: "Irene", email: "i@gmail.com", }));

import { gestionPreferencias } from "./09_defaults_safety";
console.log(gestionPreferencias({settings: { theme: "light" }}));
console.log(gestionPreferencias({ settings: { theme: "dark" } }));

import { extraerFuerzas } from "./10_alias_types";
console.log(extraerFuerzas({ fx: 123.4, fy: -32.1, fz: 0.0 }));

import { mapJugadores } from "./11_map_filter_callbacks";
console.log(mapJugadores([{ nombre: "Sara", pos: "PV", dorsal: 9 },{ nombre: "Joel", pos: "PT", dorsal: 1 }]));

import { normalizedApi } from "./12_api_parser";
console.log(normalizedApi({
  results: [{ id: 1, nombre: "Marta", meta: { sport: "padel", country: "ES" }},{ id: 2, nombre: "Luis",  meta: { sport: "run" } },{ id: 3, nombre: "Aya" }]
}));