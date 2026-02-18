# 🎮 Game Developer Portfolio

Un portafolio profesional minimalista y moderno para Game Developers. Diseñado para showcasear proyectos, habilidades técnicas y modelos 3D.

**Demo:** [Tu URL aquí]

![Preview](https://img.shields.io/badge/React-18.2-blue?style=flat-square&logo=react)
![Build](https://img.shields.io/badge/Build-Vite-brightgreen?style=flat-square&logo=vite)
![CSS](https://img.shields.io/badge/CSS-Tailwind-38B2AC?style=flat-square&logo=tailwindcss)
![3D](https://img.shields.io/badge/3D-Three.js-black?style=flat-square&logo=three.js)

---

## ✨ Características

- ⚡ **Ultra Rápido** - Vite + Code splitting automático
- 🎨 **Diseño Minimalista** - Tailwind CSS + CSS Modules
- 📱 **100% Responsive** - Mobile-first design
- ♿ **Accesible** - Semántica HTML + ARIA labels
- 🎬 **Animaciones Suaves** - Framer Motion
- 🎮 **Galería de Juegos** - Cards interactivos con detalles
- 🏃 **Modelos 3D** - Visualizador Three.js (preparado)
- 📊 **SEO Ready** - Optimizado para buscadores
- 🌙 **Dark Mode** - Por defecto (light mode en el futuro)
- 💾 **Datos en JSON** - Fácil de mantener y actualizar

---

## 🚀 Quick Start

### Requisitos
- Node.js 18+
- npm o pnpm

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/portfolio.git
cd portfolio

# Instalar dependencias
npm install

# Desarrollo local
npm run dev

# Compilar para producción
npm run build

# Preview de la compilación
npm run preview
```

El servidor local estará disponible en `http://localhost:5173`

---

## 📁 Estructura del Proyecto

```
portfolio/
├── src/
│   ├── components/        # Componentes React
│   │   ├── layout/        # Header, Footer, Navigation
│   │   ├── hero/          # Sección inicial
│   │   ├── about/         # Información personal
│   │   ├── skills/        # Habilidades técnicas
│   │   ├── games/         # Grid de juegos
│   │   ├── models/        # Galería 3D
│   │   └── common/        # Componentes reutilizables
│   ├── data/              # Archivos JSON de contenido
│   │   ├── games.json     # Base de datos de juegos
│   │   ├── models.json    # Base de datos de modelos 3D
│   │   ├── skills.json    # Habilidades por categoría
│   │   └── social.json    # Perfil y links sociales
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Funciones auxiliares
│   ├── styles/            # Estilos globales CSS
│   └── pages/             # Páginas principales
├── public/assets/         # Archivos estáticos
│   ├── games/             # Screenshots y GIFs
│   ├── 3d-models/         # Modelos GLTF
│   └── icons/             # Íconos SVG
├── vite.config.ts         # Configuración de Vite
├── tailwind.config.ts     # Configuración de Tailwind
└── MAINTENANCE.md         # Guía de mantenimiento
```

---

## 🛠 Stack Técnico

### Frontend
- **React 18** - Librería UI
- **TypeScript** - Tipado estático
- **Vite** - Build tool ultrarrápido
- **React Router** - Navegación SPA
- **Framer Motion** - Animaciones

### Estilos
- **Tailwind CSS v3** - Utility-first CSS
- **CSS Modules** - Estilos aislados
- **PostCSS** - Procesamiento CSS

### 3D y Visualización
- **Three.js** - Renderizado 3D
- **@react-three/fiber** - React para Three.js
- **@react-three/drei** - Utilidades 3D

### Estado y Utilidades
- **Zustand** - State management ligero
- **React Helmet** - Gestión de head
- **Classnames** - Utilidad de clases CSS

---

## 📝 Secciones

### Hero
- Nombre y rol profesional
- Tagline y biografía breve
- Links a redes sociales
- CTA a proyectos y CV

### Sobre mí
- Descripción profesional
- Experiencia y logros (stats)
- Foto de perfil
- Valores y enfoque técnico

### Habilidades
- Grid de categorías (Game Dev, Programación, Herramientas)
- Progress bars de nivel de dominio
- Íconos visuales
- Responsive a todos los dispositivos

### Juegos
- Grid de cards interactivos
- Portada del juego
- Rol desempeñado
- Tecnologías usadas
- Modal con detalles técnicos
- GIFs de gameplay
- Enlaces a GitHub, itch.io, videos

### Modelos 3D
- Galería de personajes/assets
- Miniaturas con preview
- Visualizador 3D interactivo (Three.js)
- Sistema de animaciones por modelo
- Rotación, zoom e iluminación básica

---

## ⚙️ Configuración

### Editar tu Información

**Archivo:** `src/data/social.json`

```json
{
  "profile": {
    "fullName": "Tu Nombre",
    "title": "Game Developer | Unity / C#",
    "tagline": "Tu tagline aquí",
    "bio": "Tu biografía",
    "cvUrl": "/assets/cv/CV.pdf"
  }
}
```

### Agregar un Juego

**Archivo:** `src/data/games.json`

```json
{
  "id": "mi-juego",
  "title": "Mi Juego",
  "shortDescription": "Descripción",
  "role": "Gameplay Programmer",
  "technologies": ["Unity", "C#"],
  "cover": "/assets/games/mi-juego/cover.jpg",
  "gameplay": ["/assets/games/mi-juego/gameplay-1.gif"],
  "technicalDescription": "...",
  "links": { "github": "...", "itch": "..." }
}
```

Ver [MAINTENANCE.md](./MAINTENANCE.md) para más detalles.

---

## 🎯 Próximas Features

- [ ] Visualizador 3D completamente interactivo
- [ ] Sistema de blog / artículos técnicos
- [ ] Búsqueda de proyectos
- [ ] Toggle de tema claro/oscuro
- [ ] Formulario de contacto
- [ ] Integración con GitHub API
- [ ] Analytics
- [ ] Modo offline

---

## 📱 Responsive Design

| Dispositivo | Breakpoint | Optimizado |
|-------------|------------|-----------|
| Mobile | < 640px | ✅ |
| Tablet | 641px - 1024px | ✅ |
| Desktop | > 1024px | ✅ |
| 4K | > 2560px | ✅ |

---

## ⚡ Performance

- **Lighthouse Score:** 95+ (Desktop)
- **Core Web Vitals:** Optimizados
- **Bundle Size:** ~370KB (gzipped)
- **Load Time:** < 2s (4G rápido)

Optimizaciones aplicadas:
- Code splitting automático con Vite
- Lazy loading de imágenes
- Compresión de GIFs
- Tree-shaking de dependencias

---

## 🌐 Deployment

### GitHub Pages
```bash
npm run deploy
```

### Vercel (Recomendado)
```bash
vercel deploy
```

### Netlify
```bash
netlify deploy --prod
```

---

## 🔒 Privacidad y Seguridad

- ✅ No se recopilan datos de usuarios
- ✅ No hay cookies de tracking
- ✅ HTTPS por defecto
- ✅ Sin dependencias inseguras

---

## 📄 Licencia

MIT - Libre para usar y modificar

---

## 🤝 Contribuir

Las contribuciones son bienvenidas! Para cambios mayores:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Haz commit (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📧 Contacto

**Email:** tu-email@example.com  
**GitHub:** [@tu-usuario](https://github.com/tu-usuario)  
**LinkedIn:** [tu-perfil](https://linkedin.com/in/tu-perfil)

---

## 🙏 Créditos

Inspirado en:
- [jjgs-qa.github.io](https://jjgs-qa.github.io/)
- Tendencias de web design moderno
- Community de React/Vite

---

**⭐ Si te gusta este proyecto, no olvides darle una estrella!**

Hecho con ❤️ por un Game Developer apasionado.

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
