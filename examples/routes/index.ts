import { createRouter, createWebHashHistory } from "vue-router";
import Layout from '../components/Layout.vue'

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
                    component: () => import("../docs/button.vue")
                }
            ]
        }
    ]
})

export default router;
