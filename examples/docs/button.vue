<!-- 测试markdown转html -->
<template>
    <div class="a">v-md-editor预览组件测试：</div>
    <v-md-preview :text="text" preview-class="vuepress-markdown-body"></v-md-preview>
</template>

<script setup lang="ts">
    import { ref, reactive, onMounted } from "vue";
    let props = defineProps({
        markdownTxt: String
    }) 
    console.log(props)
    const text = ref(`# 序
        开始预览组件的使用
        * 看
        * 写
        * 运行`)
</script>
