import { defineConfig, loadEnv, UserConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import inspect from 'vite-plugin-inspect';
import virtualHtml from 'vite-plugin-virtual-html';

export default defineConfig(({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(`command - ${command}. mode - ${mode}. env - ${env}.`);
    const config: UserConfig = {
        server: {
            port: 8081,
        },
        resolve: {
            alias: {
                '~bootstrap': 'bootstrap',
            },
        },
        plugins: [tsconfigPaths(), inspect()],
    };
    return config;
});
