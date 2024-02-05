<template>
	<div
		:class="`filter-item ${filter}`"
		:style="`background-image:url(${img})`"
		@click="fireFilter"
	>
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'filterBox',
	props: {
		img: String,
		filter: String,
	},
	methods: {
		fireFilter() {
			this.emitter.emit('filterState', this.filter);
			console.log('selected');
		},
	},
};
</script>

<style>
@import './style.css';
</style>

