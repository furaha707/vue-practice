<template>
	<div>
		<div v-for="(item, index) in data" :key="index">
			<h5 @click="$router.push(`/detail/${index}`)">{{ item.title }}</h5>
			<p>{{ item.date }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BlogList',
	props: {
		data: Object,
	},
};
</script>

<style></style>

