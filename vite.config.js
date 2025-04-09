import { defineConfig } from 'vite'
import obfuscatorPlugin from 'rollup-plugin-obfuscator'
import viteCompression from 'vite-plugin-compression'

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
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 2,
        unsafe: false,
        unsafe_math: false,
        unsafe_proto: false,
        unsafe_regexp: false,
        unsafe_undefined: false
      },
      mangle: {
        toplevel: true,
        properties: false,
        keep_fnames: true,
        keep_classnames: true
      },
      format: {
        comments: false,
        ascii_only: true
      }
    },
    rollupOptions: {
      input: {
        main: 'src/index.html'
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
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
      }
    },
    target: 'es2015',
    cssCodeSplit: true,
    sourcemap: false,
    reportCompressedSize: false
  },
  plugins: [
    obfuscatorPlugin({
      compact: true,
      controlFlowFlattening: false,
      deadCodeInjection: false,
      debugProtection: false,
      debugProtectionInterval: false,
      disableConsoleOutput: true,
      identifierNamesGenerator: 'hexadecimal',
      log: false,
      renameGlobals: false,
      rotateStringArray: true,
      selfDefending: false,
      stringArray: true,
      stringArrayEncoding: ['base64'],
      stringArrayThreshold: 0.5,
      transformObjectKeys: false,
      unicodeEscapeSequence: false
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
      deleteOriginFile: false
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'brotliCompress',
      ext: '.br',
      deleteOriginFile: false
    })
  ],
  server: {
    port: 5173,
    open: true
  }
}) 
