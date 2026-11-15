import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      // O react-datepicker 4 aponta o campo "browser" para o build CommonJS. No Vite 8 (Rolldown) o import default
      // desse build vira o objeto do módulo e a página quebra (React error #130); usa o build ES do próprio pacote.
      // Regex exata para não afetar o import do CSS (react-datepicker/dist/react-datepicker.css).
      { find: /^react-datepicker$/, replacement: 'react-datepicker/dist/es/index.js' },
    ],
  },
})
