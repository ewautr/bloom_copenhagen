<template>
  <div class="about-wrapper">
    <div class="about">
      <div class="about_line"></div>
      <div class="about_line"></div>
      <div class="about_image1">
        <img :src="`${about.section_1_image}`" alt="image of sea" />
      </div>
      <div class="about_image2">
        <img :src="`${about.section_2_image}`" alt="image" />
      </div>
      <div class="about_image3">
        <img :src="`${about.section_3_image}`" alt="image" />
      </div>
      <article class="about_bloom rellax" data-rellax-speed="1">
        <h1>{{ about.section_1_title }}</h1>
        <p>{{ about.section_1_paragraph }}</p>
        <router-link tag="button" to="/#products" class="btn">{{ about.section_1_button }}</router-link>
      </article>
      <article class="about_mission rellax" data-rellax-speed="1">
        <h1>{{ about.section_2_title }}</h1>
        <div class="about_mission-text">
          <div>
            <h4>
              <b>{{ about.section_2_subtitle_one }}</b>
            </h4>
            <p>{{ about.section_2_paragraph_one }}</p>
          </div>
          <div>
            <h4>
              <b>{{ about.section_2_subtitle_two }}</b>
            </h4>
            <p>{{ about.section_2_paragraph_two }}</p>
          </div>
          <router-link tag="button" to="/services" class="btn btn2">{{ about.section_2_button }}</router-link>
        </div>
      </article>
      <article class="about_katja rellax" data-rellax-speed="1">
        <h1>{{ about.section_3_title }}</h1>
        <p>{{ about.section_3_paragraph }}</p>
        <router-link tag="button" to="/contact" class="btn">{{ about.section_3_button }}</router-link>
      </article>
    </div>
  </div>
</template>

<script>
import Rellax from "rellax";

export default {
  data() {
    return {
      about: []
    };
  },
  created() {
    this.fetchProducts();
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const rellax = new Rellax(".rellax");
  },
  methods: {
    fetchProducts() {
      // GET /someUrl
      this.$http
        .get("https://ewautracka.com/bloom/statamic/!/Fetch/page/about")
        .then(response => {
          // get body data
          this.about = response.body.data;
        });
    }
  }
};
</script>

<style></style>
