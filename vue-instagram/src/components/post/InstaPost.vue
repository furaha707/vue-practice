<template>
	<div class="post">
		<div class="post-header">
			<div class="profile"></div>
			<span class="profile-name">{{ data.name }}</span>
		</div>
		<div
			:class="`post-body ${data.filter}`"
			:style="{ backgroundImage: `url(${data.postImage})` }"
			@click="$store.commit('changeLikes', data.id)"
		></div>
		<div class="post-content">
			<p>{{ data.likes }} Likes</p>
			<p>
				<strong>{{ data.name }}</strong>
				{{ data.content }}
			</p>
			<p class="date">{{ data.date }}</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'InstaPost',
	props: {
		data: Object,
	},
	mounted() {
		console.log(this.data.id);
	},
};
</script>

<style>
@import './style.css';
</style>

