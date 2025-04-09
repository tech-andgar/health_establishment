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
        passes: 3,
        unsafe: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true
      },
      mangle: {
        toplevel: true,
        properties: {
          regex: /^_/,
          keep_quoted: true
        },
        keep_fnames: false,
        keep_classnames: false
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
      controlFlowFlattening: true,
      controlFlowFlatteningThreshold: 0.5,
      deadCodeInjection: true,
      deadCodeInjectionThreshold: 0.3,
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
      unicodeEscapeSequence: true,
      splitStrings: true,
      splitStringsChunkLength: 5,
      target: 'browser',
      reservedNames: ['^_'],
      reservedStrings: ['^_']
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
