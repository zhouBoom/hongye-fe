import { App } from 'vue';
import Button from '@hongye-ui/button/src/index.vue';
import Tabs from '@hongye-ui/tabs/src/index.vue'
const components = [
    Button,
    Tabs
];

const install = (app: App): void => {
    // 遍历组件，挂载到全局
    components.forEach(component => {
        // 遍历组件，挂载到全局
        app.component(component.name, component);
    })
}

export default {
    install // 导出install方法。createApp({}).use() 需要install方法
}