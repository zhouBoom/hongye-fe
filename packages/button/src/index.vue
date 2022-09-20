<template>
	<button :class="classs" @click="handleClick">
		<i v-if="loading" class="h-icon-loading"></i>
		<i v-if="icon && !loading" :class="icon"></i>
		<span v-if="$slots.default"><slot></slot></span>
	</button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
type IButtonType =
	| "primary"
	| "warning"
	| "danger"
	| "default"
	| "info"
	| "success";

export default defineComponent({
	name: "HButton",
	props: {
		type: {
			// 按钮类型
			type: String as PropType<IButtonType>,
			default: "primary",
			vaildator: (val: string) => {
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
		disabled: Boolean, // 按钮禁用
		loading: Boolean, // 按钮loading icon
		round: Boolean, // 按钮圆角
	},
	emits: ["click"],
	setup(props, ctx) {
		console.log(props)
		const classs = computed(() => [
			"h-button",
			"h-button--" + props.type,
			{
				"is-disabled": props.disabled,
				"is-loading": props.loading,
				"is-round": props.round,
			},
		]);
		console.log(classs)
		const handleClick = (e: any) => {
			ctx.emit("click", e);
		};

		return {
			classs,
			handleClick,
		};
	}
});
</script>
