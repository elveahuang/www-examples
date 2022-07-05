import { createApp } from 'vue';
import App from '@/components/App.vue';
import { setupApp } from '@/utils';
import '@/theme/default.scss';

setupApp(createApp(App)).then(() => {
    console.log(`Application has been started.`);
});
