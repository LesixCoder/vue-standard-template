import { createStore, createLogger } from 'vuex';
import { isDevMode, isVuexLog } from '/@/utils/env';

const isDev = isDevMode();

export const store = createStore({
    strict: isDev,
    plugins: [isDev ? (isVuexLog() ? createLogger() : () => {}) : () => {}],
});

export function hotModuleUnregisterModule(name: string) {
    if (!name || !import.meta.hot) return;
    if ((store.state as Recordable)[name]) {
        store.unregisterModule(name);
    }
}

export default store;
