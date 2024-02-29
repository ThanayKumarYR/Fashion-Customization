import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://thanaykumayr.github.io/Fashion-Customization/",
  plugins: [react()],
  build: {
    // generate manifest.json in outDir
    manifest: true,
  },
})
