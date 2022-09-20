<template>
  <ul class="web-layout__body__menu">
    <li @click="iconClick">icon</li>
    <li @click="buttonClick">button</li>
  </ul>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const router = useRouter();

    const iconClick = () => {
      router.push("/icon");
    };

    const buttonClick = () => {
      router.push("/button");
    };

    const buttonGroupClick = () => {
      router.push("/buttonGroup");
    };
    
    const layoutClick = () => {
      router.push("/layout");
    };

    const checkboxClick = () => {
      router.push("/checkbox");
    };

    const transferClick = () => {
      router.push("/transfer");
    };

    const messageClick = () => {
        router.push("/message");
    };

    const collapseClick = () => {
      router.push("/collapse");
    };

    const infiniteScrollClick = () => {
      router.push("/infiniteScroll");
    };

    const inputClick = () => {
      router.push("/input");
    };

    const formClick = () => {
      router.push("/form");
    };

    return {
      iconClick,
      buttonClick,
      buttonGroupClick,
      layoutClick,
      checkboxClick,
      transferClick,
      messageClick,
      collapseClick,
      infiniteScrollClick,
      inputClick,
      formClick
    };
  },
});
</script>

<style lang="scss">
.web-layout__body__menu {
  @include box-shadow;
  li {
    padding: 0 20px;
    line-height: 60px;
    border-bottom: 1px solid $border-color;
    @include cursor(pointer);
    &:hover {
      background-color: $active;
    }
  }
}
</style>
