<template>
  <div class="products-wrapper">
    <div class="products">
      <div class="products_info">
        <h1>Body lotion</h1>
        <p>
          This is one of those rare scents that I feel like I can wear anywhere,
          anytime. Day or night, autumn or spring. This is a floral vanilla with
          a fruity twist. Vanilla, blackcurrant, neroli, and rose are the most
          prominent players here. - Love, Katja
        </p>
        <router-link to="/product" tag="button" class="btn">see more</router-link>
      </div>
      <div class="products_ingredients btn">
        <img src="../../assets/ing.png" alt />
      </div>
      <div class="products_img"></div>
      <div class="products_details">
        <div class="products_details-labels">
          <img src="../../assets/label-vegan.png" alt="vegan" />
          <img src="../../assets/label-organic.png" alt="organic" />
          <img src="../../assets/label-recyclable.png" alt="recyclable" />
        </div>
        <ul>
          <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labels: ["vegan", "organic", "recyclable"],
      ingredients: ["avocado", "banana", "spinach", "flax seed"]
    };
  }
};
</script>

<style>
.products_ingredients:hover ~ .products_img {
  background-image: url("~@/assets/product1-ing.png");
}

.products_img {
  background-image: url("~@/assets/product1.png");
}
</style>
