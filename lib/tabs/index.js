import { defineComponent, openBlock, createElementBlock, Fragment, renderList, toDisplayString, createBlock, resolveDynamicComponent } from 'vue';

var script = defineComponent({
    name: 'HTabs',
    setup(props, context) {
        const defaults = context.slots.default();
        console.log(defaults);
        defaults.forEach((tag) => {
            if (tag.type !== 'h-tab') {
                throw new Error('111HTabs 子标签必须是HTab');
            }
        });
        const titles = defaults.map((tag) => {
            return tag.props.title;
        });
        console.log(titles);
        return {
            defaults,
            titles
        };
    }
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", null, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.titles, (title, index) => {
      return (openBlock(), createElementBlock("div", {
        key: title + index
      }, toDisplayString(title), 1 /* TEXT */))
    }), 128 /* KEYED_FRAGMENT */)),
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.defaults, (tab, index) => {
      return (openBlock(), createBlock(resolveDynamicComponent(tab), { key: index }))
    }), 128 /* KEYED_FRAGMENT */))
  ]))
}

script.render = render;
script.__file = "packages/tabs/src/index.vue";

script.install = (app) => {
    app.component(script.name, script);
};
let _Tabs = script;

export { _Tabs as default };
