import About from "./components/About/About.vue";
import Home from "./components/Home/Home.vue";
import ProductPage from "./components/ProductPage/ProductPage.vue";
import Contact from "./components/Contact/Contact.vue";
import Services from "./components/Services/Services.vue";

export const routes = [
  { path: "/about", component: About },
  { path: "/product", component: ProductPage },
  { path: "/contact", component: Contact },
  { path: "/services", component: Services },
  { path: "", component: Home }
];
