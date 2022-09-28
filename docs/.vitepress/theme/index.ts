import DefaultTheme from "vitepress/theme";
import HongyeUI from 'hongye-ui/index'; // 开发阶段
import 'theme-chalk/src/button.scss';
import "element-plus/dist/index.css";
import "prismjs/themes/prism-funky.min.css";
import VpDemo  from "../src/vp-demo.vue";

export default {
  ...DefaultTheme,
  enhanceApp: ({ app }) => {
    app.use(HongyeUI);
    app.component('Demo',VpDemo)
  },
};