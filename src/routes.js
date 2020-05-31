import About from "./components/About/About.vue";
import Home from "./components/Home/Home.vue";
import ProductPage from "./components/ProductPage/ProductPage.vue";
import Contact from "./components/Contact/Contact.vue";
import Services from "./components/Services/Services.vue";
// import Products from "./components/Home/Products.vue";

export const routes = [
  { path: "/about", component: About },
  { path: "/product/:slug", component: ProductPage },
  { path: "/contact", component: Contact },
  { path: "/services", component: Services },
  { path: "/#products", component: Home },
  { path: "", component: Home }
];
