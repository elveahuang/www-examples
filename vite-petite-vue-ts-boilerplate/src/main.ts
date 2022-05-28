import { createApp } from 'petite-vue';
import '@/main.scss';

createApp({
    count: 0,
    get plusOne() {
        return this.count + 1;
    },
    increment() {
        this.count++;
    },
})
    .mount('#root')
    .then(() => {
        console.log('mount');
    });
