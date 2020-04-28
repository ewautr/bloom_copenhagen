<template>
  <div class="product">
    <div class="product_main">
      <img
        class="product_main-img"
        src="../../assets/product1.png"
        alt="product"
      />
      <div class="product_main-text">
        <h1>Body Lotion</h1>
        <h4>with shea butter</h4>
        <Counter></Counter>
        <button class="btn">add to cart</button>
      </div>
    </div>
    <div class="product_details">
      <section>
        <h3>
          Description
          <span @click="showDesc = !showDesc"> {{ descPlus }} </span>
        </h3>
        <p v-if="showDesc">
          This is one of those rare scents that I feel like I can wear anywhere,
          anytime. Day or night, autumn or spring. This is a floral vanilla with
          a fruity twist. Vanilla, blackcurrant, neroli, and rose are the most
          prominent players here. - Love, Katja
        </p>
      </section>
      <section>
        <h3>
          Directions <span @click="showDir = !showDir"> {{ dirPlus }} </span>
        </h3>
        <p v-if="showDir">
          Used for generations as everything from a teeth whitener to heavy
          metal detoxification, Keeko Activated Charcoal is made from coconut
          husks and is the new must have natural ingredient to add to your
          beauty and wellness cabinet.
        </p>
      </section>
      <section>
        <h3>
          Ingredients <span @click="showIng = !showIng"> {{ ingPlus }} </span>
        </h3>
        <ul v-if="showIng">
          <li class="text" v-for="ingredient in ingredients" :key="ingredient">
            {{ ingredient }}
          </li>
        </ul>
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
      showIng: true
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
  }
};
</script>

<style></style>
