import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/home-assistant.js',
      formats: ['es'],
    },
    rollupOptions: {
      // external: /^lit/,
    },
    outDir: 'HomeAssistant/popup/ha'
  },
});
