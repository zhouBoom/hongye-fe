import { createRouter, createWebHashHistory } from "vue-router";
import Layout from '../components/Layout.vue'
import Button from '../docs/button.vue'
// import markdownTxt from '../markdown/button.md'

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
                    component: Button,
                    // props: {markdownTxt: markdownTxt}
                }
            ]
        }
    ]
})

export default router;
