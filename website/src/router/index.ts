import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes';
import Layout from '@components/layout/index.vue';

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
    routes: [
        {
            path: '/',
            redirect: '/index',
            component: Layout,
            children: [
                {
                    path: 'index',
                    name: 'index',
                    meta: {
                        icon: 'el-icon-document',
                        title: '首页'
                    },
                    component: () => import('@views/home/index.vue')
                },
                ...routes
            ]
        }
    ]
});

export default router;
