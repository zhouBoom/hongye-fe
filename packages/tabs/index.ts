import { App } from "vue";
import Tabs from './src/index.vue'

Tabs.install = (app: App): void => {
    app.component(Tabs.name, Tabs)
}

let _Tabs = Tabs;

export default _Tabs;