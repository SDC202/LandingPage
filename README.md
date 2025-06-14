# Eduardo Manzanilla - Sitio Web Oficial

Este es el repositorio oficial del sitio web personal y profesional para Eduardo Manzanilla, diseñado para showcasing sus obras, servicios y mantenerse en contacto con su audiencia.

## 🚀 Características Principales

Este sitio web estático está construido para ser rápido, seguro y fácil de mantener, ofreciendo las siguientes funcionalidades clave:

* **Página de Inicio Dinámica (`/`):**
    * **Sección Hero:** Título personalizable, imagen de fondo y enlaces clave.
    * **Sección "Sobre Mí":** Foto de perfil y listado de experiencia profesional.
    * **Carrusel de YouTube:** Muestra una selección de videos del canal de YouTube del músico, con desplazamiento lateral y enlaces directos a los videos.
    * **Promoción de la Tienda:** Destaca productos clave de la tienda con un llamado a la acción claro.
    * **Novedades y Anuncios:** Muestra las últimas noticias y eventos, con enlaces a la página completa de Novedades.
    * **Footer:** Información de contacto y enlaces a redes sociales.

* **Tienda de Música (`/shop/`):**
    * Catálogo de composiciones originales, arreglos y adaptaciones.
    * Listado de productos con imagen, título, descripción, precio y enlace a detalles.
    * Páginas de detalle individuales para cada producto.
    * Organizado por **categorías de productos** (ej. Composición, Arreglo, Educación) que se pueden explorar desde la página de inicio.

* **Formulario de Solicitud de Arreglos (`/arreglos/`):**
    * Página dedicada para que los clientes soliciten arreglos musicales personalizados.
    * Formulario detallado para recopilar toda la información necesaria para una cotización (instrumentación, estilo, referencias, etc.).
    * *Nota: Este es un formulario de frontend. Para procesar las solicitudes, se requiere una integración de backend (ej. Netlify Forms, Formspree, etc.) que se configuraría en el despliegue.*

* **Sección de Novedades (`/novedades/`):**
    * Página de listado de noticias con los artículos más recientes.
    * Formato de lista/blog con imagen a un lado y texto completo al otro (si no hay imagen, el espacio se adapta).
    * Páginas de detalle individuales para cada noticia.

* **Diseño Responsivo:** Adaptable a diferentes tamaños de pantalla (móviles, tabletas, escritorios).
* **Contenido Gestionable:** La mayoría del contenido es fácilmente editable a través de archivos de datos `.yaml` y `.md`.

## 🛠️ Tecnologías Utilizadas

* **Eleventy (11ty):** Un generador de sitios estáticos minimalista y flexible.
* **Nunjucks:** Un potente motor de plantillas para la lógica de los archivos HTML.
* **Tailwind CSS:** Un framework CSS "utility-first" para un desarrollo de interfaz rápido y modular.
* **Alpine.js:** Una librería JavaScript ligera para la interactividad de componentes (ej. carrusel de videos).
* **Node.js & npm:** Entorno de ejecución y gestor de paquetes.
* **PostCSS:** Para procesar y optimizar el CSS de Tailwind.

## 🚀 Configuración y Desarrollo Local

Para poner el sitio en marcha en tu máquina local o entorno de desarrollo (como GitHub Codespaces):

### Prerrequisitos

Asegúrate de tener [Node.js](https://nodejs.org/en/download/) (que incluye `npm`) instalado en tu sistema.

### Pasos de Instalación

1.  **Clona este repositorio** (o asegúrate de tener todos los archivos si los pegaste directamente):
    ```bash
    git clone [https://github.com/tu-usuario/nombre-de-tu-repo.git](https://github.com/tu-usuario/nombre-de-tu-repo.git)
    cd nombre-de-tu-repo
    ```
2.  **Instala las dependencias del proyecto:**
    ```bash
    npm install
    ```
    *Si encuentras errores de dependencia (`ERESOLVE`), puede que necesites actualizar algunas librerías o forzar la instalación. Se han realizado actualizaciones a Tailwind CSS v3 y librerías compatibles.*
3.  **Construye el proyecto (una vez inicial):**
    ```bash
    npm run build
    ```
    *Esto generará el CSS inicial y la estructura del sitio.*
4.  **Inicia el servidor de desarrollo:**
    ```bash
    npm run start
    ```
    *Esto construirá el sitio, iniciará un servidor local (normalmente en `http://localhost:8080`), y vigilará los cambios en los archivos para refrescar automáticamente el navegador.*

## ✍️ Gestión de Contenido

La mayoría del contenido del sitio se gestiona a través de archivos de datos (`.yaml` y `.md`) en la carpeta `src/`.

* **Página de Inicio (`/index.html`):**
    * **Contenido principal (títulos, descripciones, enlaces, imágenes):** Edita `src/_data/home.yaml`.
    * **Videos de YouTube del carrusel:** Añade o modifica los `youtube_videos` en `src/_data/home.yaml` con los `youtube_id` de tus videos.
    * **Tu foto y experiencia:** `profile_image` y `professional_experience` en `src/_data/home.yaml`.

* **Tienda de Música (`/shop/`):**
    * **Página principal de la tienda (`/shop/`):** La configuración está en `src/shop/shop.json`.
    * **Productos individuales:** Cada producto es un archivo Markdown (`.md`) dentro de `src/shop/`. Edita su "front matter" (título, descripción, imagen, precio, categoría) y el contenido del cuerpo.
        * **¡Importante!** Asegúrate de que cada producto `.md` tenga `tags: ["products"]` en su front matter.
    * **Imágenes de Productos:** Coloca las imágenes en `src/static/images/` y usa la ruta `/static/images/nombre-imagen.jpg` en el campo `image:` del producto.

* **Categorías de Productos:**
    * **Definición de categorías:** Crea archivos Markdown (`.md`) para cada categoría (ej. `src/categories/composicion.md`) con su `title` y `description`.
    * **Imágenes de Categoría:** Si quieres que las categorías tengan imágenes en la página de inicio, coloca imágenes con el nombre `category-[nombre-slug].jpg` (ej. `category-composicion.jpg`) en `src/static/images/`.

* **Novedades (`/novedades/`):**
    * **Página principal de novedades (`/novedades/`):** La configuración está en `src/news/news.json`.
    * **Noticias individuales:** Cada noticia es un archivo Markdown (`.md`) dentro de `src/news/`. Edita su "front matter" (título, descripción, fecha, imagen) y el contenido del cuerpo.
        * **¡Importante!** Asegúrate de que cada noticia `.md` tenga `tags: ["news"]` en su front matter.
    * **Imágenes de Noticias:** Coloca las imágenes en `src/static/images/` y usa la ruta `/static/images/nombre-imagen.jpg` en el campo `image:` de la noticia.

* **Configuración General del Sitio:**
    * **Nombre del sitio, logo:** `src/_data/settings.yaml`.
    * **Elementos de navegación (menú):** `src/_data/navigation.yaml`.

## ⚙️ Personalización Avanzada

* **Estilos CSS:** Modifica o extiende las clases de Tailwind CSS directamente en los archivos HTML o Markdown. Para estilos personalizados más complejos, puedes editar `src/static/css/tailwind.css`.
* **Funcionalidades de Eleventy:** `eleventy.js` es el archivo de configuración principal de Eleventy, donde se definen colecciones, filtros, etc.
* **JavaScript (Alpine.js):** Para añadir interactividad a los componentes, consulta la documentación de Alpine.js y edita directamente en el HTML.

## 🚀 Despliegue

Este sitio web es estático y puede desplegarse en cualquier servicio de hosting de sitios estáticos (Netlify, Vercel, GitHub Pages, Firebase Hosting, etc.). La configuración del proyecto está optimizada para [Netlify](https://www.netlify.com/), como se especifica en `netlify.toml`.

---

**¡Disfruta creando y compartiendo tu música con el mundo!**

---