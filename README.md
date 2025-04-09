# Health Establishment Project

A web application for managing and displaying health establishments with interactive maps and filtering capabilities.

## Project Structure

```mermaid
graph TD
    A[Health Establishment Project] --> B[Source Code]
    A --> C[Configuration]
    A --> D[Build & Deploy]
    
    B --> B1[src/]
    B1 --> B1a[index.html]
    B1 --> B1b[js/]
    B1 --> B1c[css/]
    
    B1b --> B1b1[Core Components]
    B1b1 --> B1b1a[main.js]
    B1b1 --> B1b1b[data.js]
    B1b1 --> B1b1c[list-filter.js]
    B1b1 --> B1b1d[split-view.js]
    
    B1b --> B1b2[Map Components]
    B1b2 --> B1b2a[map.js]
    B1b2 --> B1b2b[markers.js]
    B1b2 --> B1b2c[load-map.js]
    
    B1b --> B1b3[UI Components]
    B1b3 --> B1b3a[modal.js]
    B1b3 --> B1b3b[filter-toggle.js]
    B1b3 --> B1b3c[view-control.js]
    
    B1b --> B1b4[Utils]
    B1b4 --> B1b4a[helpers.js]
    B1b4 --> B1b4b[format.js]
    
    B1c --> B1c1[style.css]
    B1c --> B1c2[split-view.css]
    
    C --> C1[vite.config.js]
    C --> C2[package.json]
    C --> C3[.editorconfig]
    C --> C4[CNAME]
    
    D --> D1[dist/]
    D --> D2[public/]
    D --> D3[.github/]
```

## Key Components

- **Core Components**
  - `main.js`: Application entry point and initialization
  - `data.js`: Data management and storage
  - `list-filter.js`: List filtering functionality
  - `split-view.js`: Split view management

- **Map Components**
  - `map.js`: Map initialization and configuration
  - `markers.js`: Marker management for health establishments
  - `load-map.js`: Map loading utilities

- **UI Components**
  - `modal.js`: Modal dialog functionality
  - `filter-toggle.js`: Filter toggle controls
  - `view-control.js`: View control management

- **Utilities**
  - `helpers.js`: Common helper functions and DOM utilities
  - `format.js`: Data formatting utilities

- **Styles**
  - `style.css`: Main application styles
  - `split-view.css`: Split view specific styles

## Features

- Interactive map visualization of health establishments
- Advanced filtering and search capabilities
- Split view mode (map and list)
- Responsive design
- Detailed establishment information
- Custom markers and popups
- City-based filtering
- Text search functionality

## Development

This project uses Vite as the build tool and development server. To get started:

1. Install dependencies:
```bash
pnpm install
```

2. Available Scripts:
```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

3. Development Server Configuration:
```bash
# Start server with specific host
pnpm dev --host

# Start server with specific port
pnpm dev --port 3000

# Start server with both host and port
pnpm dev --host --port 3000
```

The development server runs on:
- Default port: 5173
- Auto-opens browser: Yes
- Host: All network interfaces (when --host flag is used)

## Dependencies

### Production Dependencies
- `leaflet`: Interactive maps library
- `@qwik.dev/partytown`: Web worker management

### Development Dependencies
- `vite`: Build tool and development server
- `@rollup/plugin-terser`: JavaScript minification
- `postcss-preset-env`: CSS processing
- `rollup-plugin-brotli`: Brotli compression
- `rollup-plugin-gzip`: Gzip compression
- `rollup-plugin-obfuscator`: Code obfuscation
- `rollup-plugin-terser`: Additional minification
- `terser`: JavaScript minifier
- `vite-plugin-compression`: Vite compression plugin

## Project Configuration

- **Build Tool**: Vite v6.2.5
- **Package Manager**: pnpm
- **Version Control**: Git
- **Deployment**: GitHub Pages (configured via CNAME)
- **License**: ISC
- **Repository**: [GitHub](https://github.com/tech-andgar/health_establishment)

### Build Configuration
- **Base URL**: /
- **Output Directory**: dist/
- **Minification**: Terser
- **Target**: ES2015
- **Source Maps**: Disabled
- **Code Splitting**: Enabled
- **Compression**: Gzip and Brotli
- **Obfuscation**: Enabled for data.js

## License

ISC License
