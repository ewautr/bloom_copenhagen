<template>
  <div class="header">
    <Menu @click.native="toggleNav"></Menu>
    <router-link to="/"
      ><img class="header_logo" src="../../assets/logo_box.png" alt="logo"
    /></router-link>
    <Cart></Cart>
    <Navigation v-if="showNavigation"></Navigation>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Cart from "./Cart.vue";
import Navigation from "./Navigation";
export default {
  components: {
    Menu,
    Cart,
    Navigation
  },
  data() {
    return {
      showNavigation: false
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.showNavigation = false;
      window.scrollTo(0, 0);
    }
  },
  methods: {
    toggleNav() {
      this.showNavigation = !this.showNavigation;
    }
  }
};
</script>
<style></style>
