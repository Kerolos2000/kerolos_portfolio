import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import compression from 'vite-plugin-compression';
import viteImagemin from 'vite-plugin-imagemin';
import removeConsole from 'vite-plugin-remove-console';
import sitemap from 'vite-plugin-sitemap';

const routes = [
	{ priority: 1.0, url: '/' },
	{ priority: 0.8, url: '/projects' },
];

export default defineConfig({
	build: {
		cssMinify: true,
		minify: 'esbuild',
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes('node_modules')) {
						return 'vendor';
					}
				},
			},
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
		compression({
			algorithm: 'brotliCompress',
			threshold: 512,
		}),
		compression({
			algorithm: 'gzip',
			threshold: 1024,
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
		removeConsole(),
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
