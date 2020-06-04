<template>
  <div class="header">
    <Menu @click.native="toggleNav" :class="{ 'menu-show': showNavigation }"></Menu>
    <router-link to="/" :class="{ showLogo: scrolled }">
      <img class="header_logo" src="../../assets/logo_box.png" alt="logo" />
    </router-link>
    <Cart></Cart>
    <Navigation @navItemClicked="toggleNav" v-if="showNavigation"></Navigation>
    <!-- <transition name="fadeBgIn">
      <CartBox v-if="showCart"></CartBox>
    </transition>-->
  </div>
</template>

<script>
import Menu from "./Menu.vue";
import Cart from "./Cart.vue";
import Navigation from "./Navigation";
// import CartBox from "./CartBox";
export default {
  components: {
    Menu,
    Cart,
    Navigation
    // CartBox
  },
  data() {
    return {
      showNavigation: false,
      scrolled: false
      // showCart: false
    };
  },
  created() {
    window.addEventListener("scroll", () => {
      this.scrolled = true;
    });
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.showNavigation = false;
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
