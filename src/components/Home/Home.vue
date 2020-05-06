<template>
  <div>
    <Frontpage></Frontpage>
    <ServicesDisplay></ServicesDisplay>
    <Products></Products>
  </div>
</template>

<script>
import Frontpage from "./Frontpage.vue";
import ServicesDisplay from "./ServicesDisplay.vue";
import Products from "./Products.vue";

export default {
  components: {
    Frontpage,
    Products,
    ServicesDisplay
  }
};
</script>

<style>
</style>