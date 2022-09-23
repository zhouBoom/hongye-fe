// typings/vue-shim.d.ts

declare module '*.vue' {
    // 取defineComponent的返回值，标识组件类型
    import { defineComponent, App } from 'vue';
    const component: ReturnType<typeof defineComponent> & { install(app: App): void }
    // 导出组件类型
    export default component;
}

declare module '*.md' {}
declare module '@kangc/v-md-editor/lib/preview'
declare module '@kangc/v-md-editor/lib/theme/vuepress.js'
