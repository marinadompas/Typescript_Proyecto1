// Crea una interfaz Libro con las propiedades: titulo, autor y anioPublicacion.
interface Libro {
    titulo: string;
    autor: string;
    anioPublicacion: number;
}

// Escribe una función llamada mostrarInfoLibro que reciba un objeto de tipo Libro y 
// muestre por consola toda la información del libro.
function mostrarInfoLibro(libro: Libro): void {
    console.table(`Título: ${libro.titulo}, Autor: ${libro.autor}, Año de Publicación: ${libro.anioPublicacion}`);
}

// Crea un objeto de tipo Libro y pásalo a la función mostrarInfoLibro para probarla.
console.table('titulo: 1984, autor: George Orwell, anioPublicacion:  1949');

export function ejecutarEjer2(): void {
  console.log('Ejercicio 2 ejecutado');
}