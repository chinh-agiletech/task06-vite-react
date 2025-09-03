// src/locales/en/index.ts (and similar for vi)
const modules = import.meta.glob('./*.json', { eager: true });

type LocaleData = Record<string, string>; // or `unknown` if values can be nested

const locales: Record<string, LocaleData> = {};

for (const path in modules) {
  const name = path.replace('./', '').replace('.json', '');
  locales[name] = (modules[path] as { default: LocaleData }).default;
}

export default locales;
