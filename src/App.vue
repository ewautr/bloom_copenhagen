<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
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
      if (this.$route.path === "/product") {
        this.showFooter = false;
      } else {
        this.showFooter = true;
      }
    }
  }
};
</script>

<style></style>
