/*
Crea una interfaz Estudiante con las propiedades nombre, activo (booleano) y calificacion. 
Escribe una función filtrarEstudiantesActivos que reciba un array de estudiantes y devuelva 
solo aquellos que estén activos.
*/

interface Estudiante {
    nombre: string;
    activo: boolean;
    calificacion: number;
}

// Filtra los estudiantes activos de un array de estudiantes
export function filtrarEstudiantesActivos(estudiantes: Estudiante[]): Estudiante[] {
    return estudiantes.filter(estudiante => estudiante.activo);
}

filtrarEstudiantesActivos([
    { nombre: 'Ana', activo: true, calificacion: 85 },
    { nombre: 'Luis', activo: false, calificacion: 90 },
    { nombre: 'Marta', activo: true, calificacion: 78 }
]);

// Pruebo que funciona
const estudiantes: Estudiante[] = [
    { nombre: 'Ana', activo: true, calificacion: 85 },
    { nombre: 'Luis', activo: false, calificacion: 90 },
    { nombre: 'Marta', activo: true, calificacion: 78 }
];

// Ejecución de la función
const estudiantesActivos = filtrarEstudiantesActivos(estudiantes);
console.table(estudiantesActivos);

export function ejecutarEjer6(): void {
  console.log('Ejercicio 6 ejecutado');
}