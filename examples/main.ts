import { createApp } from "vue";
import App from "./App.vue"
import router from './routes'
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// 引入组件库
import HongyeUI from 'hongye-ui'; // 开发阶段
import 'theme-chalk/src/button.scss';

VMdPreview.use(vuepressTheme)

createApp(App).use(router).use(HongyeUI).use(VMdPreview).mount('#app')
