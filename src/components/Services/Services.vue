<template>
  <div class="services_wrapper">
    <div class="services">
      <div class="services_line line"></div>
      <div class="services_line line"></div>
      <div class="services_bg1"></div>
      <div class="services_bg2"></div>
      <h2 class="services_heading">Services</h2>
      <h4 class="services_instagram">
        <a href="https://www.instagram.com/bloom_copenhagen/" target="blank">@bloom_copenhagen</a>
      </h4>
      <article class="services_article rellax" data-rellax-speed="-0.5">
        <h2>{{ content.article_title }}</h2>
        <section class="section1">
          <h4>
            <b>{{ content.subtitle_one }}</b>
          </h4>
          <p>{{ content.paragraph_one }}</p>
        </section>
        <section class="section1">
          <h4>
            <b>{{ content.subtitle_two }}</b>
          </h4>
          <p>{{ content.paragraph_two }}</p>
        </section>
      </article>
      <div class="services_images rellax" data-rellax-speed="-1">
        <img :src="`${content.image_1}`" alt="img1" />
        <img :src="`${content.image_2}`" alt="img2" />
        <img :src="`${content.image_3}`" alt="img3" />
      </div>
      <!-- <h4 class="services_subheading">
        <b>
          Sit comfortably and let me do my magic
          <br />- Love, Katja
        </b>
      </h4>-->
    </div>
    <h4 class="services_subheading">
      <b>{{ content.quote }}</b>
    </h4>
    <div class="services_horiz-line"></div>
    <div class="prices">
      <h2>Prices</h2>
      <Prices
        v-for="category in categories"
        :key="category.title"
        :category="category.title"
        :category-slug="category.slug"
        :services="services"
      ></Prices>
    </div>
    <router-link to="/contact" tag="button" class="btn">Contact me</router-link>
  </div>
</template>

<script>
import Prices from "./Prices.vue";
import Rellax from "rellax";

export default {
  data() {
    return {
      categories: [],
      services: [],
      content: []
    };
  },
  components: {
    Prices
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const rellax = new Rellax(".rellax");
  },
  created() {
    this.fetchContent();
    this.fetchCategories();
    this.fetchServices();
  },
  methods: {
    fetchCategories() {
      // GET /someUrl
      this.$http
        .get(
          "https://ewautracka.com/bloom/statamic/!/Fetch/taxonomy/categories"
        )
        .then(response => {
          // get body data
          this.categories = response.body.data;
        });
    },
    fetchServices() {
      // GET /someUrl
      this.$http
        .get(
          "https://ewautracka.com/bloom/statamic/!/Fetch/collection/services"
        )
        .then(response => {
          // get body data
          this.services = response.body.data;
        });
    },
    fetchContent() {
      // GET /someUrl
      this.$http
        .get("https://ewautracka.com/bloom/statamic/!/Fetch/page/services")
        .then(response => {
          // get body data
          this.content = response.body.data;
        });
    }
  }
};
</script>

<style></style>
