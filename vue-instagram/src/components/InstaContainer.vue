<template>
	<div v-if="step == 0">
		<Post v-for="(item, index) in data" :key="index" :data="item" />
	</div>

	<div v-if="step == 1">
		<div
			:class="`upload-image ${mainFilter}`"
			:style="`background-image: url(${img})`"
		></div>
		<div class="filters">
			<FilterBox :img="img" v-for="item in filter" :key="item" :filter="item">
				{{ item }}
			</FilterBox>
		</div>
	</div>

	<!-- 글작성페이지 -->
	<div v-if="step == 2">
		<div class="upload-image" :style="`background-image: url(${img})`"></div>
		<div class="write">
			<textarea class="write-box" @input="$emit('write', $event.target.value)">
write!</textarea
			>
		</div>
	</div>
</template>

<script>
import Post from './post/InstaPost.vue';
import FilterBox from './filter/InstaFilter.vue';

export default {
	name: 'InstaContainer',
	data() {
		return {
			filter: [
				'aden',
				'_1977',
				'brannan',
				'brooklyn',
				'clarendon',
				'earlybird',
				'gingham',
				'hudson',
				'inkwell',
				'kelvin',
				'lark',
				'lofi',
				'maven',
				'mayfair',
				'moon',
				'nashville',
				'perpetua',
				'reyes',
				'rise',
				'slumber',
				'stinson',
				'toaster',
				'valencia',
				'walden',
				'willow',
				'xpro2',
			],
		};
	},
	props: {
		data: Array,
		step: Number,
		img: String,
		mainFilter: String,
	},
	components: {
		Post,
		FilterBox,
	},
	methods: {},
};
</script>

<style>
@import './style.css';
</style>

