import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // Treat all tags starting with 'md-' as custom elements (Material Web Components)
          isCustomElement: (tag) => tag.startsWith('md-')
        }
      }
    })
  ],
})
