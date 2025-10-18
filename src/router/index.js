import { createRouter, createWebHistory } from "vue-router";
import Home from '../Views/Home.vue';
import Blog from "../Views/Blog.vue";
import ContactUs from "../Views/ContactUs.vue";
import Service from "../Views/Service.vue";
import Work from "../Views/Work.vue";
import AboutUs from "../Views/AboutUs.vue";
import PrivacyPolicy from "../Views/PrivacyPolicy.vue";


const routes = [
  { path: "/", component: Home },
  { path: "/Blog", component: Blog},
  { path: '/ContactUs', component: ContactUs },
  { path: '/Service', component: Service },
  { path: '/Work', component: Work },
  { path: '/AboutUs', component: AboutUs },
  { path: '/PrivacyPolicy', component: PrivacyPolicy },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;