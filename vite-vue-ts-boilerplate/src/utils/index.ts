import { App } from 'vue';
import { router } from '@/plugins/vue-router';

export const setupApp = async (app: App) => {
    //
    await app.use(router);
    //
    router.isReady().then(() => {
        app.mount('#app');
    });
};
