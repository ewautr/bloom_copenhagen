<template>
  <div class="products">
    <div class="products_info">
      <h1>{{ product.title | capitalize }}</h1>
      <p>{{ product.details }}</p>
    </div>
    <router-link :to="`/product/${product.slug}`" tag="button" class="seemore btn">see more</router-link>
    <div
      class="products_ingredients btn"
      @mouseenter="showIngredient = !showIngredient"
      @mouseleave="showIngredient = !showIngredient"
    >
      <img src="../../assets/ing.png" alt />
    </div>
    <div class="products_img" :style="`background-color: ${product.color}`">
      <img v-if="!showIngredient" :src="`${product.img}`" alt="img of product" />
      <img v-else :src="`${product.img_ingredients}`" alt="img of product ingredients" />
    </div>
    <div class="products_details">
      <div class="products_details-labels">
        <img src="../../assets/label-vegan.png" alt="vegan" />
        <img src="../../assets/label-organic.png" alt="organic" />
        <img src="../../assets/label-recyclable.png" alt="recyclable" />
      </div>
      <ul>
        <li
          v-for="ingredient in product.product_ingredients"
          :key="ingredient.id"
        >{{ ingredient.ingredient_title | capitalize }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showIngredient: false
    };
  }
};
</script>

<style></style>
