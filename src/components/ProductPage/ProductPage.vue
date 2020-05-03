<template>
  <div class="product">
    <div class="product_main">
      <div class="product_main-bg"></div>
      <img
        class="product_main-img"
        :src="`${currentProduct.img}`"
        alt="product"
      />
      <div class="product_main-text">
        <h1>{{ currentProduct.title }} {{ currentProduct.price }}</h1>
        <h4>
          with {{ currentProduct.product_ingredients[0].ingredient_title }}
        </h4>
        <Counter :currentprice="currentProduct.price"></Counter>
        <button class="btn">add to wishlist</button>
      </div>
    </div>
    <div class="product_details">
      <section>
        <h3>
          Description
          <span @click="showDesc = !showDesc">{{ descPlus }}</span>
        </h3>
        <transition name="slideTextIn">
          <p v-if="showDesc">
            {{ currentProduct.product_description }}
          </p>
        </transition>
      </section>
      <section>
        <h3>
          Directions
          <span @click="showDir = !showDir">{{ dirPlus }}</span>
        </h3>
        <transition name="slideTextIn">
          <p v-if="showDir">
            {{ currentProduct.product_directions }}
          </p>
        </transition>
      </section>
      <section>
        <h3>
          Ingredients
          <span @click="showIng = !showIng">{{ ingPlus }}</span>
        </h3>
        <transition name="slideTextIn">
          <ul v-if="showIng">
            <li
              class="text"
              v-for="ingredient in currentProduct.product_ingredients"
              :key="ingredient.id"
            >
              {{ ingredient.ingredient_title }}
            </li>
          </ul>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import Counter from "./Counter.vue";

export default {
  data() {
    return {
      ingredients: ["avocado", "banana", "spinach", "flax seed"],
      showDesc: true,
      showDir: true,
      showIng: true,
      productSlug: "",
      currentProduct: ""
    };
  },
  computed: {
    descPlus() {
      if (this.showDesc) {
        return "-";
      } else {
        return "+";
      }
    },
    dirPlus() {
      if (this.showDir) {
        return "-";
      } else {
        return "+";
      }
    },
    ingPlus() {
      if (this.showIng) {
        return "-";
      } else {
        return "+";
      }
    }
  },
  components: {
    Counter
  },
  created() {
    this.productSlug = this.$route.params.slug;
    this.fetchProduct();
  },
  methods: {
    fetchProduct() {
      this.$http
        .get(
          `http://ewautracka.com/bloom/statamic/!/Fetch/entry/products/${this.productSlug}`
        )
        .then(response => {
          // get body data
          this.currentProduct = response.body.data;
          console.log(this.currentProduct.price);
        });
    }
  }
};
</script>

<style></style>
