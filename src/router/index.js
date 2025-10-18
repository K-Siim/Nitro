import { createRouter, createWebHistory } from "vue-router";
import Home from '../Views/Home.vue';
import Blog from "../Views/Blog.vue";


const routes = [
  { path: "/", component: Home },
  { path: "/Blog", component: Blog},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;