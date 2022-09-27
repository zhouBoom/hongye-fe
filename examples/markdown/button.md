# Button 按钮

按钮用于触发一个操作，如提交表单。

### 组件注册

<!-- ```javascript
import { Button } from 'udc-design-vue';
Vue.use(Button);
``` -->

### 基础用法

按钮支持 default、primary、text 三种类型，默认为 default。

#### 代码演示

::: demo
```html
<template>
  <div>
    <h-button type="primary">按钮</h-button>
    <h-button type="danger">按钮</h-button>
    <h-button type="success">按钮</h-button>
    <h-button type="harning">按钮</h-button>
    <h-button type="info">按钮</h-button>
    <h-button type="default">按钮</h-button>
  </div>
</<template>
<<script>
import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
        console.log('66666')
    }
})
</script>
```
:::

<!-- ### 禁用状态

按钮不可用状态。你可以使用disabled属性来定义按钮是否可用，它接受一个Boolean值。

#### 代码演示

::: demo
```html
<template>
  <div>
    <udc-button disabled>默认按钮</udc-button>
    <udc-button type="primary" disabled>主要按钮</udc-button>
    <udc-button type="text" disabled>文字按钮</udc-button>
  </div>
</<template>
```

::: -->

<!-- ### 按钮尺寸

支持 large、normal、small 三种尺寸，默认为 normal。

#### 代码演示

::: demo
```html
<template>
  <div>
    <udc-button size="large">大号按钮</udc-button>
    <udc-button>默认按钮</udc-button>
    <udc-button size="small">小号按钮</udc-button>
  </div>
  <div style="margin-top:20px">
    <udc-button type="primary" size="large">大号按钮</udc-button>
    <udc-button type="primary">默认按钮</udc-button>
    <udc-button type="primary" size="small">小号按钮</udc-button>
  </div>
  <div style="margin-top:20px">
    <udc-button type="text" size="large">大号按钮</udc-button>
    <udc-button type="text">默认按钮</udc-button>
    <udc-button type="text" size="small">小号按钮</udc-button>
  </div>
</<template>
``` -->

<!-- ::: -->

### API

#### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | 类型   | string    |   default / primary / success / text |     default    |
| size     | 尺寸   | string  |   large / normal / small            |    normal     |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |

#### Events

| 事件     | 说明    | 回调参数     |
|---------- |-------- |---------- |
| click     | 点击按钮时的回调	   | event: Event    |

#### Slots

| 名称     | 说明    |
|---------- |-------- |
| default     | 按钮内容	   |
