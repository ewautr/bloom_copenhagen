<template>
  <div class="nav">
    <ul class="nav_list">
      <router-link to="/" tag="li" class="nav_list-item"
        >see products</router-link
      >
      <router-link to="/about" tag="li" class="nav_list-item"
        >about us</router-link
      >
      <router-link to="" tag="li" class="nav_list-item">contact</router-link>
      <router-link to="" tag="li" class="nav_list-item">brand</router-link>
    </ul>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../Footer/Footer.vue";

export default {
  components: {
    Footer
  }
};
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 7vh;
  width: 100%;
}
</style>
