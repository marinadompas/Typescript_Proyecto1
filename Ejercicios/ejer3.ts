/*
Define una interfaz Producto que tenga las propiedades: nombre, precio y disponible.
Crea una función actualizarDisponibilidad que reciba un objeto Producto y un valor booleano, y
actualice la propiedad disponible del product
*/

interface Producto {
    nombre: string;
    precio: number;
    disponible: boolean;
}

function actualizarDisponibilidad(producto: Producto, disponible: boolean): void {
    producto.disponible = disponible;
}

// Pruebo que funciona
const producto1: Producto = {
    nombre: 'Laptop',
    precio: 1500,
    disponible: true
};

actualizarDisponibilidad(producto1, false);
console.table(producto1); // { nombre: 'Laptop', precio: 1500, disponible: false }

export function ejecutarEjer3(): void {
  console.log('Ejercicio 3 ejecutado');
}