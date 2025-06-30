import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   base: "/TOO_DO_APP/",
  plugins: [react(),
    tailwindcss(),
  ],
  base: '/TOO_DO_APP/',
})
