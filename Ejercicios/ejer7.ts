/*
Define una interfaz Inventario con las propiedades producto, cantidad y categoria.
Crea una función modificarInventario que reciba un objeto de tipo Inventario y un valor numérico
que aumente o disminuya la cantidad del producto en inventario.
*/

interface Inventario {
    producto: string;
    cantidad: number;
    categoria: string;
}

function modificarInventario(inventario: Inventario, cambioCantidad: number): Inventario {
    return {
        ...inventario,
        cantidad: inventario.cantidad + cambioCantidad
    };
}   

// Pruebo que funciona
const inventarioInicial: Inventario = {
    producto: 'Manzanas',
    cantidad: 100,
    categoria: 'Frutas'
};

const inventarioModificado = modificarInventario(inventarioInicial, -20);
console.table(inventarioModificado);

export function ejecutarEjer7(): void {
  console.log('Ejercicio 7 ejecutado');
}