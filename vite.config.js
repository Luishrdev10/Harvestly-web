import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  base: '/Harvestly-web/'  // Reemplaza 'harvestly-app' por el nombre de tu repositorio
});
