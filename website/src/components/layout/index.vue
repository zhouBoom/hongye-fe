<template>
    <div class="web-layout">
        <Header />
        <div class="web-layout__body">
            <Menu />
            <div class="web-layout__body__container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import Header from '../header/index.vue';
import Menu from '../menu/index.vue';

export default defineComponent({
    components: {
        Header,
        Menu
    }
    
})
</script>
