// Genera HTML estático después de `vite build`:
//  - dist/index.html  -> la home con todo el contenido ya renderizado (SEO)
//  - dist/404.html    -> página de error; Cloudflare Pages la sirve con código 404
//                        para cualquier URL que no exista (antes devolvía la home con 200)
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf-8');
const ROOT_TAG = '<div id="root"></div>';
if (!template.includes(ROOT_TAG)) throw new Error('No se encontró <div id="root"></div> en dist/index.html');

// Home
const homeHtml = await render('/');
fs.writeFileSync(path.join(dist, 'index.html'), template.replace(ROOT_TAG, `<div id="root">${homeHtml}</div>`));

// 404: misma plantilla, pero sin canonical/datos estructurados y con noindex
const notFoundHtml = await render('/pagina-no-encontrada');
const page404 = template
  .replace(ROOT_TAG, `<div id="root">${notFoundHtml}</div>`)
  .replace(/<title>[\s\S]*?<\/title>/, '<title>Página no encontrada | GW Desarrollos</title>')
  .replace(/<meta name="robots"[^>]*>/, '<meta name="robots" content="noindex, follow" />')
  .replace(/\s*<link rel="canonical"[^>]*>/, '')
  .replace(/\s*<!-- Datos estructurados[\s\S]*?<\/script>/, '');
fs.writeFileSync(path.join(dist, '404.html'), page404);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`Prerender OK: index.html (${homeHtml.length} chars), 404.html (${notFoundHtml.length} chars)`);
