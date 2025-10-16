/*
Diseña una interfaz Persona con las propiedades nombre y anioNacimiento. 
Escribe una función llamada calcularEdad que tome un objeto Persona y calcule
la edad actual en base al año de nacimiento.
*/
interface Persona {
    nombre: string;
    anioNacimiento: number;
}

    function calcularEdad(persona: Persona): number {
        const anioActual: number = new Date().getFullYear();
        return anioActual - persona.anioNacimiento;
    }

// Pruebo que funciona
    const persona1: Persona = { nombre: 'Juan', anioNacimiento: 1990 };
    const edadPersona1: number = calcularEdad(persona1);
    console.log(`La edad de ${persona1.nombre} es ${edadPersona1} años.`);

export function ejecutarEjer4(): void {
    console.log('Ejercicio 4 ejecutado');
}