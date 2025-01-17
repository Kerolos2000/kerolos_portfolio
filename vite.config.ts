/* eslint-disable perfectionist/sort-objects */
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
	build: {
		minify: 'esbuild',
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['@emotion/react', '@emotion/styled'],
					mui: ['@mui/icons-material', '@mui/material'],
					other: ['react', 'react-dom', 'react-router-dom'],
				},
			},
		},
		target: 'esnext',
	},
	plugins: [
		react(),
		compression({
			algorithm: 'brotliCompress',
			ext: '.br',
			threshold: 10240,
		}),
		viteImagemin({
			gifsicle: { optimizationLevel: 7 },
			mozjpeg: { quality: 80 },
			optipng: { optimizationLevel: 7 },
			svgo: {
				plugins: [{ name: 'removeViewBox' }, { name: 'removeDimensions' }],
			},
			webp: { quality: 80 },
		}),
	],
	resolve: {
		alias: {
			src: '/src',
		},
	},
	server: {
		hmr: true,
	},
});
