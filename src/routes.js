import About from "./components/About/About.vue";
import Home from "./components/Home/Home.vue";
import ProductPage from "./components/ProductPage/ProductPage.vue";

export const routes = [
  { path: "/about", component: About },
  { path: "/product", component: ProductPage },
  { path: "", component: Home }
];
