import { createWebHistory, createRouter } from "vue-router";
import List from './components/BlogList.vue';
import Main from './components/HomeView.vue'
import Detail from './components/BlogDetail.vue'
import Comment from './components/BlogComment.vue'

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id",
    component: Detail,
    chlidren: [
      {
        path: "author",
        component: Comment,
      },
    ]
  },
  // 404 페이지
  // {
  //   path: "/:anything(.*)",
  //   component: Blank,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 