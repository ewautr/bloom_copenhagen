<template>
  <div class="product">
    <div class="product_main">
      <img
        class="product_main-img"
        src="../../assets/product1.png"
        alt="product"
      />
      <div class="product_main-text">
        <h1>Body Lotion</h1>
        <h3>with shea butter</h3>
        <Counter></Counter>
        <button class="btn">add to cart</button>
      </div>
    </div>
    <div class="product_description"></div>
  </div>
</template>

<script>
import Counter from "./Counter.vue";

export default {
  components: {
    Counter
  }
};
</script>

<style></style>
