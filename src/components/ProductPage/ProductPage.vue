<template>
  <div class="product" v-if="currentProduct">
    <div class="product_main">
      <div class="product_main-bg" :style="`background-color: ${currentProduct.color}`"></div>
      <img class="product_main-img" :src="`${currentProduct.img}`" alt="product" />

      <div class="product_main-text">
        <h1>{{ currentProduct.title | capitalize }}</h1>
        <h4>
          with
          {{
          currentProduct.product_ingredients[0].ingredient_title | capitalize
          }}
        </h4>
        <Counter :currentprice="currentProduct.price"></Counter>
        <button
          ref="button"
          :class="['btn', {disabled: disabledButton}]"
          @click="addToWishlist"
        >{{ buttonText }}</button>
        <GoBack :style="`background-color: ${currentProduct.color}`"></GoBack>
      </div>
    </div>
    <div class="product_details">
      <section>
        <h3>
          Description
          <span @click="showDesc = !showDesc">{{ descPlus }}</span>
        </h3>
        <transition name="slideTextIn">
          <p v-if="showDesc">{{ currentProduct.product_description }}</p>
        </transition>
      </section>
      <section>
        <h3>
          Directions
          <span @click="showDir = !showDir">{{ dirPlus }}</span>
        </h3>
        <transition name="slideTextIn">
          <p v-if="showDir">{{ currentProduct.product_directions }}</p>
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
            >{{ ingredient.ingredient_title | capitalize }}</li>
          </ul>
        </transition>
      </section>
    </div>
  </div>
</template>

<script>
import GoBack from "../Home/GoBack.vue";
import Counter from "./Counter.vue";
import { eventBus } from "../../main.js";

export default {
  components: {
    Counter,
    GoBack
  },
  data() {
    return {
      showDesc: true,
      showDir: true,
      showIng: true,
      productSlug: "",
      currentProduct: false,
      disabledButton: false
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
    },
    buttonText() {
      if (this.disabledButton) {
        return "in wishlist";
      } else {
        return "add to wishlist";
      }
    }
  },
  created() {
    this.productSlug = this.$route.params.slug;
  },
  mounted() {
    this.fetchProduct();
    eventBus.$on("likedItemDeleted", () => {
      this.checkWishlist();
    });
  },
  methods: {
    fetchProduct() {
      this.$http
        .get(
          `https://ewautracka.com/bloom/statamic/!/Fetch/entry/products/${this.productSlug}`
        )
        .then(response => {
          this.currentProduct = response.body.data;
          this.checkWishlist();
        });
    },
    addToWishlist() {
      this.disabledButton = true;
      eventBus.$emit("productWasLiked", this.currentProduct);
    },
    checkWishlist() {
      const likedProducts = JSON.parse(localStorage.getItem("likedProducts"));
      if (likedProducts.length > 0) {
        if (
          likedProducts.some(product => product.id === this.currentProduct.id)
        ) {
          this.disabledButton = true;
        } else {
          this.disabledButton = false;
        }
      } else {
        this.disabledButton = false;
      }
    }
  }
};
</script>

<style></style>
