import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: {
    enabled: false, // ✅ así sí lo apaga correctamente
  },
});
