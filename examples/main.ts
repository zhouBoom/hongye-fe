import { createApp } from "vue";
import App from "./App.vue"
import routes from './routes'
// 引入组件库
import HongyeUI from 'hongye-ui'; // 开发阶段
import 'theme-chalk/src/button.scss';

createApp(App).use(routes).use(HongyeUI).mount('#app')
