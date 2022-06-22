import Alpine from 'alpinejs';
import '@/main.scss';

Alpine.store('shop', {
    name: 'Alpine-Shop',
    products: ['Swiss Alp Chocolate', 'Car Alpine A110'],
});

Alpine.start();
