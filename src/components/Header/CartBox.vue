<template>
  <div class="cart_wrapper">
    <div class="clickaway" @click="clickedAway"></div>
    <div class="cart">
      <h2 class="cart_heading">Your wishlist</h2>
      <p class="cart_noitems" v-if="cartItems.length === 0">- No items. -</p>
      <transition-group name="slideItemOut" mode="out-in">
        <section
          v-for="(item, index) in cartItems"
          :key="item.id"
          class="cart_item"
          :style="`background-color: ${item.color}`"
        >
          <img :src="`${item.img}`" alt />
          <div>
            <h3>{{ item.title | capitalize }}</h3>
            <h4>{{ item.price }} dkk</h4>
          </div>
          <div class="cart_item-delete" @click="deleteItem(index)">
            <img src="../../assets/heart-x.svg" alt="close icon" />
          </div>
        </section>
      </transition-group>
      <div class="cart_info">
        <p>
          Please contact me directly in order to place an order or book an
          appointment.
          <br />- Love, Katja
        </p>
        <router-link to="/contact" tag="button" class="btn"
          >contact me</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cartItems: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteItem(index) {
      this.cartItems.splice(index, 1);
    },
    clickedAway() {
      this.$emit("clickedAway");
    }
  }
};
</script>

<style></style>
