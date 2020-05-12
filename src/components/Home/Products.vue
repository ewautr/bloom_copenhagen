<template>
  <div class="products-wrapper" id="products">
    <transition :name="slideTransition" mode="out-in">
      <Product v-for="(product) in filteredProducts" :key="product.id" :product="product"></Product>
    </transition>
    <div class="sliderBtn">
      <button @click="changeSlide('prev')">prev</button>
      <div class="indicators" :style="`grid-template-columns: repeat(${products.length}, 1fr)`">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="indicators_item"
          :style="`background-color: ${product.color}`"
          :class="{ active: (index + 1) === currentSlide }"
          @click="index + 1 === this.currentSlide"
        ></div>
      </div>
      <button @click="changeSlide('next')">next</button>
    </div>
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
      currentSlide: 1,
      slideTransition: "slideNextProduct"
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product, index) => {
        return index + 1 === this.currentSlide;
      });
    }
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
    },
    changeSlide(direction) {
      const maxSlide = this.products.length;

      if (direction === "next") {
        this.slideTransition = "slideNextProduct";
        this.currentSlide === maxSlide
          ? (this.currentSlide = 1)
          : this.currentSlide++;
      } else {
        this.slideTransition = "slidePrevProduct";
        this.currentSlide === 1
          ? (this.currentSlide = maxSlide)
          : this.currentSlide--;
      }
    }
  }
};
</script>

<style></style>
