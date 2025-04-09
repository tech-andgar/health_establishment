import { defineConfig } from 'vite'
import obfuscator from 'rollup-plugin-obfuscator'
import terser from '@rollup/plugin-terser'
import gzip from 'rollup-plugin-gzip'
import brotli from 'rollup-plugin-brotli'

export default defineConfig({
  base: '/',
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      mangle: {
        keep_fnames: true,
        keep_classnames: true,
      },
    },
    rollupOptions: {
      input: {
        main: 'src/index.html'
      },
      output: {
        manualChunks: {
          'data': ['./src/js/data.js']
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(css|js)$/.test(assetInfo.name)) {
            return `assets/[name]-[hash].[ext]`
          }
          return `assets/[name].[ext]`
        }
      },
      plugins: [
        obfuscator({
          compact: true,
          controlFlowFlattening: true,
          controlFlowFlatteningThreshold: 0.75,
          deadCodeInjection: true,
          deadCodeInjectionThreshold: 0.4,
          debugProtection: true,
          debugProtectionInterval: true,
          disableConsoleOutput: true,
          identifierNamesGenerator: 'hexadecimal',
          log: false,
          renameGlobals: false,
          rotateStringArray: true,
          selfDefending: true,
          stringArray: true,
          stringArrayEncoding: ['base64'],
          stringArrayThreshold: 0.75,
          transformObjectKeys: true,
          unicodeEscapeSequence: false
        }),
        terser({
          compress: {
            drop_console: true,
            drop_debugger: true
          },
          mangle: {
            keep_fnames: true,
            keep_classnames: true
          }
        }),
        gzip(),
        brotli()
      ]
    },
    target: 'es2015',
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false
  },
  server: {
    port: 5173,
    open: true
  }
}) 
