import { defineConfig } from 'vite';
import { resolve } from 'path';
import virtualHtml from 'vite-plugin-virtual-html';

export default defineConfig({
    server: {
        port: 8081,
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '~bootstrap': 'bootstrap',
        },
    },
    plugins: [
        virtualHtml({
            pages: {
                index: '/src/index.html',
                about: '/src/about.html',
            },
            indexPage: 'index',
        }),
    ],
});
