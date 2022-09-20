<template>
    <div>
        <h-button type="primary">按钮</h-button>
        <h-button type="danger">按钮</h-button>
        <h-button type="success">按钮</h-button>
        <h-button type="harning">按钮</h-button>
        <h-button type="info">按钮</h-button>
        <h-button type="default">按钮</h-button>
        <br> <br>
        <h-button round>圆角按钮</h-button>
        <br> <br>
        <h-button loading></h-button>
        <br> <br>
        <h-button icon="h-icon-picture"></h-button>
        <h-button icon="h-icon-loading" type="success" round>按钮</h-button>
        <br> <br>
        <h-button :loading="isLoading" @click="buttonClick">按钮</h-button>
    </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup() {
        const isLoading = ref(true);
        const buttonClick = () => {
            console.log('button-click');
        }
        setTimeout(() => {
            isLoading.value = false;
        }, 3000)

        return {
            buttonClick,
            isLoading
        }
    }
})
</script>