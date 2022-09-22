<template>
    <div class="layout">
        <header-vue/>
        <div class="layout__body">
            <menu-vue/>
            <div class="layout__body__container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HeaderVue from './Header.vue';
import MenuVue from './Menu.vue';

export default defineComponent({
    components: {
        HeaderVue,
        MenuVue
    },
    setup() {
        
    },
})
</script>
