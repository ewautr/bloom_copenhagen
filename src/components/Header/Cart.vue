<template>
  <div class="header_cart">
    <p>-10% off first order</p>
    <div class="header_cart-line"></div>
    <p>{{ likedProducts.length }}</p>
    <img src="../../assets/heart.svg" alt @click="showCart = !showCart" />
    <transition name="fadeBgIn">
      <CartBox v-if="showCart" :cartItems="likedProducts"></CartBox>
    </transition>
  </div>
</template>

<script>
import { eventBus } from "../../main.js";
import CartBox from "./CartBox";

export default {
  components: {
    CartBox
  },
  data() {
    return {
      likedProducts: [],
      showCart: false
    };
  },
  watch: {
    likedProducts: function() {
      localStorage.setItem("likedProducts", JSON.stringify(this.likedProducts));
      eventBus.$emit("likedItemDeleted");
    }
  },
  mounted() {
    if (localStorage.getItem("likedProducts"))
      this.likedProducts = JSON.parse(localStorage.getItem("likedProducts"));
  },
  created() {
    eventBus.$on("productWasLiked", data => {
      if (this.likedProducts.includes(data)) {
        //do nothing
      } else {
        this.likedProducts.push(data);
      }
    });
  },
  methods: {}
};
</script>

<style></style>
