/*
Define una interfaz Pedido que tenga las propiedades producto, cantidad y precioUnitario. 
Crea una función aplicarDescuento que reciba un objeto de tipo Pedido y un valor
numérico (porcentaje de descuento), y devuelva el total después de aplicar el descuento.
*/

interface Pedido {
    producto: string;
    cantidad: number;
    precioUnitario: number;
}

export function aplicarDescuento(pedido: Pedido, descuento: number): number {
    const total = pedido.cantidad * pedido.precioUnitario;
    const totalConDescuento = total - (total * (descuento / 100));
    return totalConDescuento;
}

// Ejemplo de uso
const pedidoEjemplo: Pedido = {
    producto: "Laptop",
    cantidad: 2,
    precioUnitario: 1500
};

const totalConDescuento = aplicarDescuento(pedidoEjemplo, 10);
console.log(`Total con descuento: $${totalConDescuento}`);

export  function ejecutarEjer5(): void {
    console.log("Ejercicio 5 ejecutado");
}