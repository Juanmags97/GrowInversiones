// Render del lado del servidor, usado solo en el build (scripts/prerender.js)
// para que el HTML publicado ya traiga el texto de la página y Google lo lea sin ejecutar JavaScript.
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';
import i18n from './i18n';

export async function render(url) {
  if (!i18n.isInitialized) {
    await new Promise((resolve) => i18n.on('initialized', resolve));
  }
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
}
