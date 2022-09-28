<template>
    <div>
        <div v-for="(title, index) in titles" :key="title + index">
            {{ title }}
        </div>
        <component v-for="(tab, index) in defaults" :key="index" :is="tab"></component>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HTab from './tab.vue'
export default defineComponent({
    name: 'HTabs',
    setup(props, context: any) {
        const defaults = context.slots.default();
        console.log(defaults)
        defaults.forEach((tag: any) => {
            if (tag.type !== 'h-tab') {
                throw new Error('111HTabs 子标签必须是HTab')
            }
        });
        const titles = defaults.map((tag: any) => {
            return tag.props.title;
        })
        console.log(titles)
        return {
            defaults,
            titles
        }
    }
})
</script>
