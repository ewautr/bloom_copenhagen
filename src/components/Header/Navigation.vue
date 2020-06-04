<template>
  <div class="nav">
    <ul @click="navItemClicked" class="nav_list">
      <router-link to="/services" tag="li" class="nav_list-item btn">services</router-link>
      <router-link to="/#products" tag="li" class="nav_list-item btn">products</router-link>
      <router-link to="/contact" tag="li" class="nav_list-item btn">contact</router-link>
      <router-link to="/about" tag="li" class="nav_list-item btn">about</router-link>
      <li class="nav_list-item btn">
        <a href="https://ewautracka.com/dist/brandmanual.pdf">brand</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    navItemClicked() {
      this.$emit("navItemClicked");
    }
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
