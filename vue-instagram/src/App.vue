<template>
	<div class="header">
		<ul class="header-button-left">
			<li>Cancel</li>
		</ul>
		<ul class="header-button-right">
			<li v-if="step == 1" @click="step++">Next</li>
			<li v-if="step == 2" @click="writeFeed">발행</li>
		</ul>
		<img src="./assets/logo.png" class="logo" />
	</div>

	<button @click="$store.dispatch('getData')">더보기버튼</button>

	<Container
		:data="data"
		:step="step"
		:img="img"
		@write="content = $event"
		:mainFilter="mainFilter"
	/>
	<button @click="fetchData">더보기</button>

	<div class="footer">
		<ul class="footer-button-plus">
			<input @change="upload" type="file" id="file" class="inputfile" />
			<label for="file" class="input-plus">+</label>
		</ul>
	</div>
</template>

<script>
import Container from './components/InstaContainer.vue';
import data from './assets/data';
import axios from 'axios';

export default {
	name: 'App',
	data() {
		return {
			step: 1,
			index: 0,
			data: data,
			img: '',
			mainFilter: '',
		};
	},
	mounted() {
		this.emitter.on('filterState', (filter) => {
			console.log(filter);
			this.mainFilter = filter;
		});
	},
	methods: {
		async fetchData() {
			try {
				const response = await axios.get(
					`https://codingapple1.github.io/vue/more${this.index}.json`
				);
				console.log('패치 성공', response);
				console.log(this.index);
				this.index++;
				this.data.push(response.data);
				if (this.index == 2) {
					return;
				}
			} catch (error) {
				console.error('패치 실패', error);
			}
		},
		upload(e) {
			let file = e.target.files[0];
			console.log(file);
			// 이미지의 url 생성
			let url = URL.createObjectURL(file);
			console.log(url);
			this.img = url;
			// this.step++;
		},
		writeFeed() {
			var myFeed = {
				name: 'John Doe',
				userImage: '',
				postImage: this.img,
				likes: 20,
				date: 'Apr 20',
				liked: false,
				content: this.content,
				filter: this.mainFilter,
			};
			this.data.unshift(myFeed);
			this.step = 0;
		},
	},
	components: {
		Container,
	},
};
</script>

<style>
@import './style.css';
</style>

