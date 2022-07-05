import { createRouter, createWebHashHistory, NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const router = createRouter({
    routes: [
        {
            path: '/',
            component: () => import('@/views/Index.vue'),
        },
    ],
    history: createWebHashHistory(),
});

router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    console.log(`beforeEach...`);
    next();
});

router.afterEach(async (to: RouteLocationNormalized) => {
    console.log(`afterEach...`);
});

export { router };
