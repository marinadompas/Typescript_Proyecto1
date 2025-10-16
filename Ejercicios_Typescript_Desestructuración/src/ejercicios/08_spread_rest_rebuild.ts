// 8) Desestructurar y reconstruir (spread + rest)
// Objetivo: Separar campos y recomponer objetos.
// Enunciado: Separa `id` en variable y deja el resto en `perfil`. Luego crea `conRol` añadiendo `rol: "admin"`.

const usuario = { id: 7, nombre: "Irene", email: "i@us.es" };
// TODO: const { id, ...perfil } = usuario;
// TODO: const conRol = { ...perfil, rol: "admin" };

console.log({ /*id, perfil, conRol*/ });

// Ejercicio 8: Crea una función que separe `id` en variable y deja el resto en `perfil`. Luego crea `conRol` añadiendo `rol: "admin"`.
export function procesaUsuario(usuario: { id: number; nombre: string; email: string }) {
    const { id, ...perfil } = usuario;
    const conRol = { ...perfil, rol: "admin" };
    return { id, perfil, conRol };
}

console.log(procesaUsuario(usuario));