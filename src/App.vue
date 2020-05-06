<template>
  <div id="app">
    <Header></Header>
    <router-view class="app-content"></router-view>
    <Footer v-show="showFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      showFooter: true
    };
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      this.toggleFooter();
    }
  },
  created() {
    this.toggleFooter();
  },
  methods: {
    toggleFooter() {
      if (this.$route.path.includes("/product")) {
        this.showFooter = false;
      } else {
        this.showFooter = true;
      }
    }
  }
};
</script>

<style>
.btn::before {
  background-image: url(~@/assets/btn-bg.png);
}
@font-face {
  font-family: "Manrope";
  src: url(~@/assets/Manrope.ttf);
}
</style>
