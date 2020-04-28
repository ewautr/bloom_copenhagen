<template>
  <div class="footer">
    <div class="footer_line"></div>
    <img src="../../assets/logo_black.png" alt class="footer_logo" />
    <div class="footer_line"></div>
    <div class="footer_links">
      <ul>
        <router-link to="/about" tag="li">About Us</router-link>
        <router-link to="/" tag="li">See Products</router-link>
      </ul>
    </div>
    <div class="footer_social">
      <a href="#" class="footer_social-item">
        <img src="../../assets/facebook.png" alt="facebook" />
      </a>
      <a href="#" class="footer_social-item">
        <img src="../../assets/instagram.png" alt="facebook" />
      </a>
      <a href="#" class="footer_social-item">
        <img src="../../assets/linkedin.png" alt="facebook" />
      </a>
    </div>
    <div class="footer_links">
      <ul>
        <router-link to="/contact" tag="li">Contact</router-link>
        <li>Brand</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
