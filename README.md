# AmpereLab Web ⚡

Web oficial y landing page para **AmpereLab**, la app de Android para medir la potencia real de carga y comparar cargadores y cables.

Diseñada con una estética moderna, minimalista y de alto rendimiento inspirada en [rawpace.app](https://rawpace.app/).

---

## ✨ Características de la web

- **Cero dependencias y carga instantánea:** HTML5 semántico, CSS moderno con variables y Vanilla JavaScript sin sobrecarga de frameworks. Puntuación 100/100 en Google PageSpeed.
- **Modo Oscuro / Modo Claro:** Detección automática de la preferencia del sistema y botón manual con persistencia en `localStorage`.
- **Bilingüe (Inglés / Español):** Versión en inglés en la raíz (`/`) y versión en español en (`/es/`).
- **Showcase de Mockups en abanico:** Presentación visual con las capturas reales de la aplicación.
- **Bento Grid de funcionalidades:** Tarjetas limpias destacando telemetría en tiempo real, ranking de cargadores, pruebas con pantalla apagada, widget y avisos de carga con captura en un reloj Wear OS.
- **Tabla de estados de carga:** Explicación técnica de por qué Android marca «Cargando» erróneamente y qué mide la app.
- **Modal de vídeo de YouTube diferido:** Carga el vídeo de demostración únicamente cuando el usuario hace clic, sin cookies iniciales ni ralentizar la web.
- **Política de privacidad integrada:** Disponible en `/privacy/` cumpliendo con los requisitos de Google Play Store.

---

## 🚀 Probar en local

Para ver la web en tu navegador:

```bash
cd ../amperelab-web
npm run dev
```

O abre directamente `index.html` en cualquier navegador web.

---

## 🌐 Cómo desplegar gratis (en 2 minutos)

### Opción 1: Cloudflare Pages (Recomendada)
1. Sube este repositorio a tu cuenta de GitHub (ej. `github.com/tu-usuario/amperelab-web`).
2. Entra en tu panel de [Cloudflare Dashboard](https://dash.cloudflare.com/) > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Selecciona tu repositorio `amperelab-web`.
4. En **Build settings**:
   - **Framework preset**: *None*
   - **Build command**: *(dejar en blanco)*
   - **Build output directory**: `.` (o dejar en blanco)
5. Haz clic en **Save and Deploy**. En 10 segundos tu web estará en directo en `https://amperelab.pages.dev` de forma 100% gratuita y con SSL ilimitado.

### Opción 2: Vercel
1. Ve a [Vercel](https://vercel.com/) y haz clic en **Add New Project**.
2. Importa el repositorio de GitHub `amperelab-web`.
3. Haz clic en **Deploy**. Tendrás tu web en `https://amperelab.vercel.app`.

### Opción 3: GitHub Pages
1. En GitHub, ve a tu repositorio `amperelab-web` > **Settings** > **Pages**.
2. En **Build and deployment > Source**, selecciona **Deploy from a branch**.
3. Elige la rama `main` y la carpeta `/ (root)`, luego pulsa **Save**.
