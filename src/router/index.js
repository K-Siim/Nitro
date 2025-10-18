import { createRouter, createWebHistory } from "vue-router";
import Home from '../Views/Home.vue';
import Blog from "../Views/Blog.vue";
import ContactUs from "../Views/ContactUs.vue";
import Service from "../Views/Service.vue";
import Work from "../Views/Work.vue";
import AboutUs from "../Views/AboutUs.vue";
import PrivacyPolicy from "../Views/PrivacyPolicy.vue";
import BlogPost from '../components/BlogPost.vue'

const routes = [
  { path: "/", component: Home },
  { path: "/blog", component: Blog, name: 'Blog' },
  { path: '/blog/:id', component: BlogPost, name: 'BlogPost' },
  { path: '/ContactUs', component: ContactUs },
  { path: '/service', component: Service },
  { path: '/work', component: Work },
  { path: '/about-us', component: AboutUs },
  { path: '/PrivacyPolicy', component: PrivacyPolicy }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;