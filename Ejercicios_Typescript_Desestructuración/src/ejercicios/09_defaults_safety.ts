// 9) Defaults seguros en anidación (evitar undefined)
// Objetivo: Defaults para propiedades potencialmente ausentes.
// Enunciado: Extrae settings.theme con default "light" y settings.lang con default "es".

type Config = { settings?: { theme?: "light" | "dark"; lang?: "es" | "en" } };

const cfg1: Config = {};
const cfg2: Config = { settings: { theme: "dark" } };

function getPrefs(config: Config) {
  // TODO: usa desestructuración con defaults y devuelve { theme, lang }
  // Pista: const { settings: { theme = "light", lang = "es" } = {} } = config;
  return {} as any;
}

console.log(getPrefs(cfg1)); // Esperado: { theme: "light", lang: "es" }
console.log(getPrefs(cfg2)); // Esperado: { theme: "dark",  lang: "es" }

// Ejercicio 9: Crea una función que extraiga settings.theme con default "light" y settings.lang con default "es".
export function gestionPreferencias(config: Config) {
  const { settings: { theme = "light", lang = "es" } = {} } = config;
  return { theme, lang };
}

console.log(gestionPreferencias(cfg1)); 
console.log(gestionPreferencias(cfg2)); 