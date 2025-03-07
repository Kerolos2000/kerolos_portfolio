import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import viteImagemin from 'vite-plugin-imagemin';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';
import sitemap from 'vite-plugin-sitemap';

const routes = [
	{ priority: 1.0, url: '/' },
	{ priority: 0.8, url: '/projects' },
];

const manifestForPlugin: Partial<VitePWAOptions> = {
	devOptions: {
		enabled: true,
	},
	includeAssets: [
		'favicon.ico',
		'favicon-16x16.png',
		'favicon-32x32.png',
		'apple-touch-icon.png',
	],
	manifest: {
		background_color: '#F7F8FA',
		description: 'An app for Kerolos Portfolio.',
		display: 'standalone',
		icons: [
			{
				sizes: '192x192',
				src: './assets/android-chrome-192x192.png',
				type: 'image/png',
			},
			{
				sizes: '512x512',
				src: './assets/android-chrome-512x512.png',
				type: 'image/png',
			},
			{
				sizes: '180x180',
				src: './assets/apple-touch-icon.png',
				type: 'image/png',
			},
			{
				sizes: '16x16',
				src: './assets/favicon-16x16.png',
				type: 'image/png',
			},
			{
				sizes: '32x32',
				src: './assets/favicon-32x32.png',
				type: 'image/png',
			},
		],
		name: 'Kerolos Magdy',
		orientation: 'portrait',
		scope: '/',
		short_name: 'Kerolos Magdy',
		start_url: '/',
		theme_color: '#F7F8FA',
	},
	minify: true,
	registerType: 'autoUpdate',
};

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
		sourcemap: true,
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
		VitePWA(manifestForPlugin),
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
