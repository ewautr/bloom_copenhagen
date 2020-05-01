<template>
  <div class="nav">
    <ul class="nav_list">
      <router-link to="/" tag="li" class="nav_list-item btn">see products</router-link>
      <router-link to="/services" tag="li" class="nav_list-item btn">my services</router-link>
      <router-link to="/about" tag="li" class="nav_list-item btn">about us</router-link>
      <router-link to="/contact" tag="li" class="nav_list-item btn">contact</router-link>
      <router-link to tag="li" class="nav_list-item btn">brand</router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: absolute;
  bottom: 7vh;
  width: 100%;
}
</style>
