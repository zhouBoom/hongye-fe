import { createApp } from "vue";
import App from './App.vue'
import router from './src/router';
import '@assets/styles/index.scss';
// 引入组件库
import HongyeUI from 'hongye-ui'; // 开发阶段
import 'theme-chalk/src/button.scss';
createApp(App).use(router).use(HongyeUI).mount('#app');

// 全局引入 - umd格式
// npm run build
// import WillUI from '../lib/index.js';
// import 'theme-chalk/src/index.scss';
// // 创建应用并使用组件库
// createApp(App).use(WillUI).mount('#app');

// 全局引入 - esm格式-全量打包
// npm run build:esm-bundle
// import WillUI from '../lib/index.esm.js'; 
// import 'theme-chalk/src/index.scss';
// // 创建应用并使用组件库
// createApp(App).use(WillUI).mount('#app');


// 按需引入 - 分组件打包 按需加载 把每个组件单独进行打包
// npm run build:esm
// import Button from '../lib/button/index';
// import Icon from '../lib/icon/index';
// import 'theme-chalk/src/index.scss';
// // 创建应用 并使用组件库
// createApp(App).use(Button).use(Icon).mount('#app');
