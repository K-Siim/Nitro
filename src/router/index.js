import { createRouter, createWebHistory } from "vue-router";
import Home from '../Views/Home.vue';
import Blog from "../Views/Blog.vue";
import ContactUs from "../Views/ContactUs.vue";


const routes = [
  { path: "/", component: Home },
  { path: "/Blog", component: Blog},
  { path: '/ContactUs', component: ContactUs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;