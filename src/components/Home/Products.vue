<template>
  <div class="products-wrapper">
    <Product
      v-for="product in products"
      :key="product.id"
      :product="product"
    ></Product>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  components: {
    Product
  },
  data() {
    return {
      products: [],
      labels: ["vegan", "organic", "recyclable"],
      ingredients: ["avocado", "banana", "spinach", "flax seed"]
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      // GET /someUrl
      this.$http
        .get("http://ewautracka.com/bloom/statamic/!/Fetch/collection/products")
        .then(response => {
          // get body data
          this.products = response.body.data;
        });
    }
  }
};
</script>

<style>
/* .products_ingredients:hover ~ .products_img {
  background-image: url("~@/assets/product1-ing.png");
}

.products_img {
  background-image: url("~@/assets/product1.png");
} */
</style>
