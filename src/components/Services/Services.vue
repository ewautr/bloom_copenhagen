<template>
  <div class="services_wrapper">
    <div class="services">
      <div class="services_line line"></div>
      <div class="services_line line"></div>
      <div class="services_bg1"></div>
      <div class="services_bg2"></div>
      <h2 class="services_heading">Services</h2>
      <article class="services_article">
        <h2>Best hair experience.</h2>
        <section class="section1">
          <h4>
            <b>— Personal approach</b>
          </h4>
          <p>
            With my work I try to maintain the natural beauty of the client,
            which is always already there. I see the individuality of the
            person, I start with a proper consultation and serve with my
            professional advice. I take time to see whats important for the
            customer and make sure they leave my salon feeling beautiful inside
            and out.
          </p>
        </section>
        <section class="section1">
          <h4>
            <b>— Years of experience</b>
          </h4>
          <p>
            I base my knowledge on 7 years of experience in an international
            work environment in the highest quality salons. Throuought my life I
            have worked with countless international customers and high
            demanding clientele.
          </p>
        </section>
      </article>
      <div class="services_images">
        <img src="../../assets/services-img1.png" alt="img1" />
        <img src="../../assets/services_img2.png" alt="img2" />
        <img src="../../assets/services_img3.png" alt="img3" />
      </div>
      <!-- <h4 class="services_subheading">
        <b>
          Sit comfortably and let me do my magic
          <br />- Love, Katja
        </b>
      </h4>-->
    </div>
    <h4 class="services_subheading">
      <b>
        Sit comfortably and let me do my magic
        <br />- Love, Katja
      </b>
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
export default {
  data() {
    return {
      categories: [],
      services: []
    };
  },
  components: {
    Prices
  },
  created() {
    this.fetchCategories();
    this.fetchServices();
  },
  methods: {
    fetchCategories() {
      // GET /someUrl
      this.$http
        .get("http://ewautracka.com/bloom/statamic/!/Fetch/taxonomy/categories")
        .then(response => {
          // get body data
          this.categories = response.body.data;
        });
    },
    fetchServices() {
      // GET /someUrl
      this.$http
        .get("http://ewautracka.com/bloom/statamic/!/Fetch/collection/services")
        .then(response => {
          // get body data
          this.services = response.body.data;
        });
    }
  }
};
</script>

<style></style>
