import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
		outDir: 'dist/hidden-search',
	},
	base: '/50-Days-50-Projects/hidden-search/',
})


