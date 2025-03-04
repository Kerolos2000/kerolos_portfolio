import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import viteImagemin from 'vite-plugin-imagemin';
import sitemap from 'vite-plugin-sitemap';

const routes = [
	{ priority: 1.0, url: '/' },
	{ priority: 0.8, url: '/projects' },
];

export default defineConfig({
	build: {
		assetsInlineLimit: 512,
		chunkSizeWarningLimit: 512,
		cssMinify: true,
		minify: 'esbuild',
		modulePreload: true,
		rollupOptions: {
			cache: false,
			output: {
				manualChunks: {
					vendor: [
						'react',
						'react-dom',
						'@mui/material',
						'@mui/lab',
						'react-router-dom',
						'react-dom-client',
						'date-fns',
						'@tanstack/react-query',
						'react-water-wave',
						'axios',
						'framer-motion',
						'@motionone/utils',
						'react-lazy-load-image-component',
						'@toolpad/core',
						'@vercel/analytics',
						'@vercel/speed-insights',
						'emailjs-com',
					],
				},
			},
			treeshake: 'recommended',
		},
		sourcemap: false,
		target: 'esnext',
	},
	plugins: [
		react(),
		chunkSplitPlugin({
			strategy: 'single-vendor',
			useEntryName: true,
		}),
		viteImagemin({
			gifsicle: { optimizationLevel: 7 },
			mozjpeg: { quality: 50 },
			optipng: { optimizationLevel: 7 },
			svgo: {
				plugins: [
					{ active: false, name: 'removeViewBox' },
					{ active: true, name: 'removeDimensions' },
					{ active: true, name: 'removeEmptyAttrs' },
					{ active: true, name: 'removeUselessStrokeAndFill' },
				],
			},
			webp: { quality: 50 },
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
