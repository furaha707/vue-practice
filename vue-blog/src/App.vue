<template>
	<nav class="navbar navbar-expand-lg bg-body-tertiary">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Navbar</a>
			<button
				class="navbar-toggler"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
						<router-link to="/" class="nav-link active"> Home </router-link>
					</li>
					<li class="nav-item">
						<router-link to="/list" class="nav-link active">
							리스트페이지
						</router-link>
					</li>
					<li class="nav-item">
						<router-link to="/detail/:id" class="nav-link active">
							상세페이지
						</router-link>
					</li>
				</ul>
				<form class="d-flex" role="search">
					<input
						class="form-control me-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
					<button class="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</div>
	</nav>

	<router-view :data="data"></router-view>

	<!-- <BlogList v-for="(item, index) in data" :key="index" :data="item" /> -->
</template>

<script>
// import BlogList from './components/BlogList.vue';
import data from './assets/data';

export default {
	name: 'App',
	data() {
		return {
			data: data,
		};
	},
	// components: {
	// 	BlogList,
	// },
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
</style>

