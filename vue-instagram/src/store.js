import { createStore } from 'vuex'
import initialPosts from './assets/data'
import axios from 'axios';

const store = createStore({
  state() {
    return {
      posts: initialPosts,
      more: {},
    }
  },
  // 전역상태 변경하는 함수 등록
  mutations : {
    // 원하는 만큼 증가시키기
    // changeAge(state, data){
    //   state.age += data
    // },
    changeLikes(state, postId) {
      const post = state.posts.find(post => post.id === postId);
      if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
      }
    },
    changeName(state){
      state.name = 'park'
    },
    setMore(state, data){
      state.posts.push(data);
    }
  },
  // ajax 나 오래걸리는 작업들 (actions 작성 후 mutation 작성)
  // context = $store
  actions: {
    getData(context){
      axios.get('https://codingapple1.github.io/vue/more0.json').then((a)=>{
        console.log(a.data);
        context.commit('setMore', a.data)
      })
    }
  } 
})

export default store;