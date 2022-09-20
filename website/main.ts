import { createApp } from "vue";
import App from './App.vue'
import router from './src/router';
import '@assets/styles/index.scss';
// 引入组件库
import HongyeUI from 'hongye-ui'; // 开发阶段
import 'theme-chalk/src/button.scss';
createApp(App).use(router).use(HongyeUI).mount('#app');
