# 🚀 QUICK REFERENCE - Cheat Sheet

## Comandos Básicos

```bash
# Desarrollo
npm run dev              # ⚡ Hot reload en localhost:5173

# Build
npm run build            # 📦 Compilar para producción

# Preview
npm run preview          # 👀 Ver compilación antes de deploy
```

---

## Archivos a Editar (Top 5)

### 1️⃣ Tu Perfil
**Ruta:** `src/data/social.json`
```json
{
  "profile": {
    "fullName": "YOUR NAME",
    "title": "Game Developer | Unity / C#",
    "bio": "Your bio here..."
  }
}
```

### 2️⃣ Tus Habilidades
**Ruta:** `src/data/skills.json`
```json
{
  "name": "Unity",
  "level": 95,
  "icon": "⚙️"
}
```

### 3️⃣ Tus Juegos
**Ruta:** `src/data/games.json`
```json
{
  "id": "my-game",
  "title": "Game Name",
  "cover": "/assets/games/my-game/cover.jpg",
  "gameplay": ["/assets/games/my-game/gameplay-1.gif"]
}
```

### 4️⃣ Tus Modelos 3D
**Ruta:** `src/data/models.json`
```json
{
  "id": "character",
  "name": "Character Name",
  "file": "/assets/3d-models/character/model.gltf"
}
```

### 5️⃣ Tus Colores
**Ruta:** `tailwind.config.js`
```javascript
colors: {
  primary: "#0f172a",
  accent: "#3b82f6",
}
```

---

## Estructura de Carpetas Assets

```
public/assets/
├── games/
│   └── mi-juego/
│       ├── cover.jpg        ← Portada (800x600)
│       ├── gameplay-1.gif    ← GIF principal
│       └── gameplay-2.gif
├── 3d-models/
│   └── mi-personaje/
│       ├── model.gltf       ← Modelo 3D
│       ├── texture.png      ← Textura
│       ├── idle.gif         ← Animación
│       └── walk.gif
├── cv/
│   └── CV.pdf              ← Tu CV
└── icons/
    └── (SVGs si necesitas)
```

---

## Componentes Reutilizables

### Button
```tsx
<Button variant="primary|secondary|ghost" size="sm|md|lg">
  Text
</Button>
```

### Card
```tsx
<Card variant="default|glass" hover>
  Content
</Card>
```

### Badge
```tsx
<Badge variant="default|accent|success|warning|error">
  Text
</Badge>
```

---

## Personalización Rápida

### Cambiar colores globales
```javascript
// tailwind.config.js
primary: "#TU_COLOR",    // Fondo
accent: "#TU_COLOR",     // Highlight
text: "#TU_COLOR",       // Texto
```

### Cambiar nombre en Hero
```json
// src/data/social.json - profile.fullName
```

### Agregar tu email
```json
// src/data/social.json - social.email
```

---

## Errores Comunes y Soluciones

| Problema | Solución |
|----------|----------|
| Imágenes no cargan | Verificar paths comienzan con `/assets/` |
| Build falla | `rm -rf dist && npm run build` |
| Cambios no aparecen | Ctrl+Shift+R (limpiar caché) |
| npm no reconocido | `$env:Path="C:\Program Files\nodejs;"+$env:Path` |
| Puerto 5173 ocupado | `npm run dev -- --port 3000` |

---

## Deploy Rápido

### Vercel (Recomendado)
```bash
npm i -g vercel
vercel
```
→ Elige "Portfolio" → Auto deploy

### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### GitHub Pages
```bash
npm install -D gh-pages
# Agregar a package.json: "deploy": "npm run build && gh-pages -d dist"
npm run deploy
```

---

## Optimización de Assets

### Imágenes
```bash
# Comprimir: TinyPNG.com o:
convert cover.jpg -quality 80 cover-optimized.jpg
```

### GIFs (de video)
```bash
ffmpeg -i video.mp4 -vf "fps=15" game.gif
```

### Modelos 3D
```bash
# Usar glTF comprimido (.glb)
# Reducir poligonos en Blender
# Embed texturas: Blender → Export → glTF > Embed Data
```

---

## Performance Checklist

- [ ] Build size < 500KB gzipped
- [ ] Lighthouse score > 90
- [ ] Load time < 2s
- [ ] Mobile responsive
- [ ] Sin imágenes rotas
- [ ] Sin console errors
- [ ] Tested en: Chrome, Firefox, Safari

---

## Anatomía de un Juego (JSON)

```json
{
  "id": "slug-unico",              // URL-friendly
  "title": "Nombre del Juego",     // Mostrado
  "shortDescription": "Una línea",  // Card
  "role": "Tu rol aquí",           // Qué hiciste
  "technologies": ["Unity", "C#"], // Stack
  "cover": "/assets/...",          // Portada
  "gameplay": ["/assets/..."],     // GIFs
  "technicalDescription": "...",   // Modal detalle
  "links": {
    "github": "https://...",
    "itch": "https://...",
    "video": "https://..."
  }
}
```

---

## Anatomía de un Modelo (JSON)

```json
{
  "id": "slug",                  // URL-friendly
  "name": "Nombre",              // Mostrado
  "file": "/assets/.../model.gltf",
  "thumbnail": "/assets/.../thumb.jpg",
  "description": "Corta",
  "animations": [
    {
      "name": "Idle",
      "preview": "/assets/.../idle.gif"
    }
  ]
}
```

---

## Git Essentials

```bash
# Primero
git init
git add .
git commit -m "init: game dev portfolio"
git branch -M main

# Remote
git remote add origin https://github.com/user/repo
git push -u origin main

# Actualizar
git add .
git commit -m "feat: agregar 2 juegos"
git push
```

---

## TypeScript Basics

```tsx
// Component
interface Props {
  title: string;
  level: number;
}

const MyComponent: React.FC<Props> = ({ title, level }) => {
  return <div>{title}: {level}%</div>;
};

export default MyComponent;
```

---

## Tailwind Utilities Frecuentes

```jsx
// Spacing
<div className="p-4 m-8 gap-2">

// Colors
<div className="bg-primary text-text-muted">

// Layout
<div className="flex flex-col md:flex-row gap-4">

// Responsive
<div className="hidden md:block">  {/* Desktop only */}

// Hover
<button className="hover:bg-accent transition-all">

// Animation
<div className="animate-fade-in">
```

---

## Debugging Tips

```tsx
// Ver data en console
console.log("Games:", gamesData.games);

// Ver renders
import { Profiler } from 'react';

// Inspect styles
// F12 → Elements → Inspect elemento
```

---

## Accessibility Must-haves

```tsx
// Buttons not divs
<button>Click</button>

// ARIA labels
<button aria-label="Open menu">
  Menu
</button>

// Semantic HTML
<main>, <section>, <article>, <nav>
```

---

## SEO Quick Wins

```html
<!-- En index.html -->
<meta name="description" content="Game Developer Portfolio">
<meta name="keywords" content="gamedev, unity, c#">
<meta property="og:title" content="Your Portfolio">
<meta property="og:image" content="preview.jpg">
```

---

## Environment Variables (si necesitas)

```bash
# Crear .env.local
VITE_API_URL=http://localhost:3000

# Usar en código
import.meta.env.VITE_API_URL
```

---

## Recursos de Ayuda

📚 **Documentación:**
- React: [react.dev](https://react.dev)
- Vite: [vitejs.dev](https://vitejs.dev)
- Tailwind: [tailwindcss.com](https://tailwindcss.com)
- Three.js: [threejs.org](https://threejs.org)

🎮 **Assets:**
- Modelos: [Sketchfab](https://sketchfab.com)
- Iconos: [Feather Icons](https://feathericons.com)
- Colores: [Coolors.co](https://coolors.co)

🚀 **Deploy:**
- Vercel: [vercel.com](https://vercel.com)
- Netlify: [netlify.com](https://netlify.com)
- GitHub Pages: [pages.github.com](https://pages.github.com)

---

## Roadmap Típico

**Hoy:** Personalizar perfil  
**Mañana:** Agregar 3 juegos  
**Próxima semana:** Deploy  
**Futuro:** Blog, 3D interactivo, monetización  

---

## FAQ Rápidas

**P: ¿Puedo usar este código comercialmente?**  
✅ Sí, MIT License

**P: ¿Cómo agrego un formulario de contacto?**  
→ Usar Formspree.io (sin backend)

**P: ¿Qué precio tiene el dominio?**  
→ ~$10-15 USD/año en Namecheap

**P: ¿Puedo hacer Dark Mode?**  
→ Sí, extension en tailwind.config.js

---

## 💡 Pro Tips

1. **Usa Lighthouse** (F12) antes de deploy
2. **Limpia caché** entre cambios (Ctrl+Shift+R)
3. **Testa en móvil** siempre (F12 → Device Mode)
4. **Comprime imágenes** antes de subir
5. **Haz commits frecuentes** en Git
6. **Leer MAINTENANCE.md** para casos complejos

---

## Emergency Commands

```bash
# Si algo está roto
npm cache clean --force
rm -rf node_modules dist package-lock.json
npm install
npm run build

# Si el servidor no inicia
lsof -i :5173              # Ver qué usa puerto
kill -9 <PID>              # Matar proceso
npm run dev                # Reintentar
```

---

**Última actualización:** Feb 18, 2026  
**Versión:** 1.0.0 Production Ready  
**Status:** ✅ 100% Funcional  

¡Disfruta tu portafolio! 🎉
