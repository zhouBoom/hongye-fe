import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, createCommentVNode, renderSlot } from 'vue';

var script = defineComponent({
    name: "HButton",
    props: {
        type: {
            // 按钮类型
            type: String,
            default: "primary",
            vaildator: (val) => {
                return [
                    "primary",
                    "warning",
                    "danger",
                    "default",
                    "info",
                    "success",
                ].includes(val);
            },
        },
        icon: {
            // 按钮icon
            type: String,
            default: "",
        },
        disabled: Boolean,
        loading: Boolean,
        round: Boolean, // 按钮圆角
    },
    emits: ["click"],
    setup(props, ctx) {
        console.log(props);
        const classs = computed(() => [
            "h-button",
            "h-button--" + props.type,
            {
                "is-disabled": props.disabled,
                "is-loading": props.loading,
                "is-round": props.round,
            },
        ]);
        console.log(classs);
        const handleClick = (e) => {
            ctx.emit("click", e);
        };
        return {
            classs,
            handleClick,
        };
    }
});

const _hoisted_1 = {
  key: 0,
  class: "h-icon-loading"
};
const _hoisted_2 = { key: 2 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("button", {
    class: normalizeClass(_ctx.classs),
    onClick: _cache[0] || (_cache[0] = (...args) => (_ctx.handleClick && _ctx.handleClick(...args)))
  }, [
    (_ctx.loading)
      ? (openBlock(), createElementBlock("i", _hoisted_1))
      : createCommentVNode("v-if", true),
    (_ctx.icon && !_ctx.loading)
      ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass(_ctx.icon)
        }, null, 2 /* CLASS */))
      : createCommentVNode("v-if", true),
    (_ctx.$slots.default)
      ? (openBlock(), createElementBlock("span", _hoisted_2, [
          renderSlot(_ctx.$slots, "default")
        ]))
      : createCommentVNode("v-if", true)
  ], 2 /* CLASS */))
}

script.render = render;
script.__file = "packages/button/src/index.vue";

const components = [
    script
];
const install = (app) => {
    // 遍历组件，挂载到全局
    components.forEach(component => {
        // 遍历组件，挂载到全局
        app.component(component.name, component);
    });
};
var index = {
    install // 导出install方法。createApp({}).use() 需要install方法
};

export { index as default };
