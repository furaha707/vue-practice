<template>
	<div>
		<h4>상세페이지</h4>
		<p>{{ data[$route.params.id].title }}</p>
		<p>{{ data[$route.params.id].content }}</p>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: 'BlogDetail',
	props: {
		data: Array,
	},
	created() {
		console.log();
	},
};
</script>

<style></style>

