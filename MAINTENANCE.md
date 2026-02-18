# 📚 Guía de Mantenimiento del Portafolio

## Tabla de Contenidos
1. [Estructura del Proyecto](#estructura-del-proyecto)
2. [Agregar un Nuevo Juego](#agregar-un-nuevo-juego)
3. [Agregar un Nuevo Modelo 3D](#agregar-un-nuevo-modelo-3d)
4. [Manejador de Assets](#manejador-de-assets)
5. [Personalización](#personalización)
6. [Deployment](#deployment)

---

## Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, Navigation
│   │   ├── hero/            # Sección inicial
│   │   ├── about/           # Sección "Sobre mí"
│   │   ├── skills/          # Habilidades técnicas
│   │   ├── games/           # Grid de juegos
│   │   ├── models/          # Galería 3D
│   │   ├── common/          # Componentes reutilizables
│   │   └── ui/              # Componentes UI pequeños
│   ├── data/               # Archivos JSON de contenido
│   │   ├── games.json      # Base de datos de juegos
│   │   ├── models.json     # Base de datos de modelos 3D
│   │   ├── skills.json     # Base de datos de habilidades
│   │   └── social.json     # Información de perfil
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Funciones auxiliares
│   ├── styles/             # Estilos globales y variables CSS
│   └── pages/              # Páginas (HomePage)
├── public/assets/          # Archivos estáticos
│   ├── games/              # Screenshots y GIFs de juegos
│   ├── 3d-models/          # Modelos GLTF y texturas
│   └── icons/              # Íconos SVG
└── README.md               # Este archivo
```

---

## Agregar un Nuevo Juego

### 1. Preparar los assets

```
public/assets/games/
└── mi-juego/
    ├── cover.jpg           # Imagen de portada (recomendado: 800x600 o 16:9)
    ├── gameplay-1.gif      # GIFs del gameplay
    ├── gameplay-2.gif
    └── gameplay-3.gif
```

### 2. Editar `src/data/games.json`

Agregar un nuevo objeto al array `games`:

```json
{
  "id": "slug-del-juego",
  "title": "Nombre del Juego",
  "shortDescription": "Descripción breve para el card",
  "role": "Tu rol (ej: Lead Programmer, Gameplay Programmer)",
  "technologies": ["Unity", "C#", "Scriptable Objects"],
  "cover": "/assets/games/mi-juego/cover.jpg",
  "gameplay": [
    "/assets/games/mi-juego/gameplay-1.gif",
    "/assets/games/mi-juego/gameplay-2.gif"
  ],
  "technicalDescription": "Descripción técnica detallada de los sistemas que programaste",
  "links": {
    "github": "https://github.com/usuario/repo",
    "itch": "https://usuario.itch.io/juego",
    "video": "https://youtube.com/..."
  }
}
```

### 3. El componente se actualiza automáticamente

No hay más pasos. La página se actualiza automáticamente gracias a que los datos vienen de JSON.

---

## Agregar un Nuevo Modelo 3D

### 1. Preparar los assets

```
public/assets/3d-models/
└── mi-personaje/
    ├── model.gltf          # Modelo 3D (formato glTF)
    ├── model.bin           # Binary data del modelo
    ├── texture.png         # Texturas
    ├── thumbnail.jpg       # Vista previa (200x200)
    ├── idle.gif            # GIFs de animaciones
    ├── walk.gif
    ├── attack.gif
    └── jump.gif
```

### 2. Editar `src/data/models.json`

```json
{
  "id": "personaje-unico",
  "name": "Nombre del Personaje",
  "file": "/assets/3d-models/mi-personaje/model.gltf",
  "thumbnail": "/assets/3d-models/mi-personaje/thumbnail.jpg",
  "description": "Descripción breve del modelo",
  "animations": [
    {
      "name": "Idle",
      "preview": "/assets/3d-models/mi-personaje/idle.gif"
    },
    {
      "name": "Walk",
      "preview": "/assets/3d-models/mi-personaje/walk.gif"
    },
    {
      "name": "Attack",
      "preview": "/assets/3d-models/mi-personaje/attack.gif"
    }
  ]
}
```

### 3. Notas sobre 3D

**Para agregar visualización Three.js:**
1. En `src/components/models/ModelViewer.tsx`, reemplaza el placeholder con:
   ```tsx
   import { Canvas } from '@react-three/fiber';
   import { OrbitControls, useGLTF } from '@react-three/drei';
   
   // Componente para renderizar el modelo
   ```

---

## Manejador de Assets

### Formatos Recomendados

| Tipo | Formato | Notas |
|------|---------|-------|
| Juegos (Portada) | JPG/PNG | 800x600 o 16:9, max 200KB |
| Gameplay | GIF | Máx 3 segundos, <1MB |
| Modelos 3D | glTF/glb | Optimizado, con texturas embedded |
| Modelos (Preview) | GIF | Rotación o animación simple |
| Miniaturas | PNG | 200x200px, <50KB |

### Optimización

```bash
# Comprimir imágenes
# Usar herramientas como:
# - ImageOptim (Mac)
# - FileOptimizer (Windows)
# - Online: TinyPNG, ImageMagick

# Generar GIFs de videos
ffmpeg -i video.mp4 -vf "fps=10" output.gif
```

---

## Personalización

### Editar tu Nombre y Perfil

Archivo: `src/data/social.json`

```json
{
  "profile": {
    "fullName": "Tu Nombre Aquí",
    "title": "Tu Rol Profesional",
    "tagline": "Tu tagline profesional",
    "bio": "Tu biografía profesional",
    "cvUrl": "/assets/cv/CV.pdf"
  },
  "social": [
    {
      "name": "GitHub",
      "icon": "github",
      "url": "https://github.com/tu-usuario"
    }
    // Agregar más redes
  ]
}
```

### Cambiar Colores

Archivo: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: "#0f172a",        // Fondo principal
      secondary: "#1e293b",      // Fondo secondary
      accent: "#3b82f6",         // Color destacado
      'accent-dark': "#1d4ed8",  // Hover del accent
      text: "#f1f5f9",           // Texto principal
      'text-muted': "#cbd5e1",   // Texto secundario
    },
  },
}
```

### Editar Habilidades

Archivo: `src/data/skills.json`

```json
{
  "categories": [
    {
      "id": "game-dev",
      "title": "Game Development",
      "skills": [
        {
          "name": "Unity",
          "level": 95,
          "icon": "⚙️"
        }
        // Agregar más
      ]
    }
  ]
}
```

### Cambiar Secciones en la Navegación

Archivo: `src/utils/constants.ts`

```typescript
export const NAVIGATION = [
  { label": "Inicio", href: "#hero" },
  { label": "Sobre mí", href: "#about" },
  { label": "Habilidades", href: "#skills" },
  { label": "Juegos", href: "#games" },
  { label": "Modelos 3D", href: "#models" },
  { label": "Contacto", href: "#contact" },
];
```

---

## Notas de Implementación

### ✅ Completado
- [x] Layout responsivo
- [x] Hero section con animaciones
- [x] Sección "Sobre mí"
- [x] Sección de habilidades con progress bars
- [x] Grid de juegos con cards
- [x] Galería de modelos 3D
- [x] Componentes reutilizables
- [x] Sistema de datos JSON
- [x] Custom hooks para optimización
- [x] Estilos con Tailwind + CSS Modules

### 🎯 Por Implementar en el Futuro
- [ ] Visualizador Three.js para modelos 3D (Canvas 3D interactivo)
- [ ] Animaciones en scroll más avanzadas
- [ ] Dark mode / Light mode toggle
- [ ] Blog de artículos técnicos
- [ ] Sección de descargas (modelos, code snippets)
- [ ] Contacto con formulario
- [ ] Analytics
- [ ] SEO mejorado

---

## Deployment

### Preparar para Producción

```bash
# 1. Verificar build
npm run build

# 2. Ver preview local
npm run preview

# 3. Hacer commit
git add .
git commit -m "feat: agregar nuevo juego/modelo"
```

### Desplegar en GitHub Pages

```bash
# 1. Editar vite.config.ts
// Agregar: base: '/portfolio/'

# 2. Instalar gh-pages
npm install -D gh-pages

# 3. En package.json agregar:
"deploy": "npm run build && gh-pages -d dist"

# 4. Desplegar
npm run deploy
```

### Desplegar en Vercel

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Desplegar
vercel

# 3. Configuración automática en vercel.json
```

### Desplegar en Netlify

```bash
# 1. Instalar Netlify CLI
npm i -g netlify-cli

# 2. Desplegar
netlify deploy

# 3. Setup automático
```

---

## Troubleshooting

### Problema: Build falla
```bash
# Limpiar y reconstruir
rm -rf node_modules dist
npm install
npm run build
```

### Problema: Imágenes no cargan
- Verificar que los paths en JSON coincidan con los archivos reales
- Los paths deben empezar con `/assets/`
- Verificar que las imágenes están en `public/assets/`

### Problema: Modelos 3D no se cargan
- Asegurar que el archivo .gltf existe
- Verificar que los textures están referenciados correctamente
- Usar herramientas como [Spline](https://spline.design) para validar modelos

---

## Performance Tips

1. **Lazy load las imágenes:**
   ```tsx
   <img loading="lazy" src="..." />
   ```

2. **Optimizar GIFs:**
   - Máximo 3 segundos de duración
   - Reducir fps a 10-15
   - Comprimir con GIFLOSSY

3. **Modelos 3D:**
   - Usar glTF comprimido (.glb)
   - Reducir poligonos si es posible
   - Embedear texturas en el modelo

4. **Cacheing:**
   - Vite maneja automáticamente el cache
   - Los archivos en `dist/assets/` tienen hash para invalidación de cache

---

## Contacto y Soporte

Para preguntas técnicas o mejoras, contacta a través de:
- 📧 Email: tu-email@example.com
- 🐙 GitHub: github.com/tu-usuario
- 💼 LinkedIn: LinkedIn.com/in/tu-perfil

¡Gracias por usar este portafolio!
