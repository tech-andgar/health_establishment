# Establecimientos de Sanidad Militar del Ejército

Aplicación web para visualizar los establecimientos de sanidad militar del ejército colombiano en un mapa interactivo.

## Estructura del Proyecto

El proyecto está organizado en módulos para una mejor separación de responsabilidades:

- `index.html` - Archivo HTML principal
- `data.js` - Datos de los establecimientos
- `script/` - Directorio de scripts
  - `main.js` - Archivo principal que inicializa todos los módulos
  - `modal.js` - Funcionalidad del modal de información
  - `map.js` - Inicialización y gestión del mapa
  - `view-control.js` - Control de vistas (lista, mapa, ambos)
  - `list-filter.js` - Generación y filtrado de listas
  - `markers.js` - Gestión de marcadores en el mapa
  - `utils/` - Utilidades
    - `helpers.js` - Funciones de utilidad para manipulación del DOM

## Cómo Ejecutar

Para ejecutar la aplicación, simplemente abre el archivo `index.html` en un navegador web moderno. La aplicación utiliza módulos ES6, por lo que es necesario un servidor web para ejecutarla correctamente.

### Usando un servidor local

Puedes usar cualquier servidor web local para ejecutar la aplicación. Por ejemplo, con Python:

```bash
# Python 3
python -m http.server

# Python 2
python -m SimpleHTTPServer
```

Luego abre tu navegador y navega a `http://localhost:8000/index.html`

## Características

- Visualización de establecimientos en un mapa interactivo
- Filtrado por ciudad y búsqueda por texto
- Vista de lista y mapa
- Información detallada de cada establecimiento
- Diseño responsive

## Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript (ES6+)
- Leaflet.js para mapas interactivos 
