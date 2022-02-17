import type { UserConfig, ConfigEnv } from 'vite';

import { loadEnv } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

import { wrapperEnv } from './build/vite/utils';
import { createProxy } from './build/vite/proxy';

function pathResolve(dir: string) {
    return resolve(__dirname, '.', dir);
}

export default ({ mode }: ConfigEnv): UserConfig => {
    const root = process.cwd();
    const env = loadEnv(mode, root);
    const viteEnv = wrapperEnv(env);
    const { VITE_PORT, VITE_PUBLIC_PATH, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv;

    return {
        base: VITE_PUBLIC_PATH,
        resolve: {
            alias: [
                {
                    // /@/xxxx  =>  src/xxx
                    find: /^\/@\//,
                    replacement: pathResolve('src') + '/',
                },
                {
                    // /@/xxxx  =>  src/xxx
                    find: /^\/#\//,
                    replacement: pathResolve('types') + '/',
                },
                {
                    // /@/xxxx  =>  src/xxx
                    find: /^~/,
                    replacement: pathResolve('node_modules') + '/',
                },
            ],
        },
        server: {
            port: VITE_PORT,
            // Load proxy configuration from .env
            proxy: createProxy(VITE_PROXY),
            hmr: {
                overlay: true,
            },
        },
        build: {
            outDir: 'dist',
            terserOptions: {
                compress: {
                    keep_infinity: true,
                    // Used to delete console in production environment
                    drop_console: VITE_DROP_CONSOLE,
                },
            },
            // Turning off brotliSize display can slightly reduce packaging time
            brotliSize: false,
            chunkSizeWarningLimit: 1200,
        },
        plugins: [vue()],
    };
};
