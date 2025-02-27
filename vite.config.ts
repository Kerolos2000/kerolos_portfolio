import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import compression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import sitemap from 'vite-plugin-sitemap';

const routes = [
	{ priority: 1.0, url: '/' },
	{ priority: 0.8, url: '/projects' },
];

export default defineConfig({
	build: {
		assetsInlineLimit: 4096,
		chunkSizeWarningLimit: 1000,
		cssMinify: true,
		minify: 'esbuild',
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: [
						'react',
						'react-dom',
						'@mui/material',
						'react-router-dom',
						'react-dom-client',
						'date-fns',
						'@tanstack/react-query',
					],
				},
			},
		},
		sourcemap: true,
		target: 'esnext',
	},
	plugins: [
		react(),
		chunkSplitPlugin({
			strategy: 'single-vendor',
			useEntryName: true,
		}),
		compression({
			algorithm: 'brotliCompress',
			threshold: 512,
		}),
		viteImagemin({
			gifsicle: { optimizationLevel: 7 },
			mozjpeg: { quality: 65 },
			optipng: { optimizationLevel: 7 },
			svgo: {
				plugins: [
					{ active: false, name: 'removeViewBox' },
					{ active: true, name: 'removeDimensions' },
					{ active: true, name: 'removeEmptyAttrs' },
					{ active: true, name: 'removeUselessStrokeAndFill' },
				],
			},
			webp: { quality: 65 },
		}),
		sitemap({
			dynamicRoutes: routes.map(route => route.url),
			hostname: 'https://kerolos-magdy.vercel.app/',
			priority: Object.fromEntries(
				routes.map(route => [route.url, route.priority]),
			),
			readable: true,
			robots: [{ allow: '/', userAgent: '*' }],
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
