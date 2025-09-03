// Tự động import tất cả file JSON trong thư mục vi
const modules = import.meta.glob('./*.json', { eager: true });

const locales: Record<string, any> = {};

for (const path in modules) {
  const name = path.replace('./', '').replace('.json', '');
  locales[name] = (modules[path] as any).default;
}

export default locales;