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
      <transition name="checkoutInfo">
        <div class="cart_checkout" v-if="checkout">
          <h2>CHECKOUT</h2>
          <p>
            In order to place an order or book an appointment, please contact me
            directly here:
            <span>+45 50 18 92 91</span>
            <span>hi@bloom.com</span>
            - Love, Katja
          </p>
        </div>
      </transition>
      <div class="cart_info">
        <button
          @click="checkout = !checkout"
          :class="['btn', { disabled: disabledButton }]"
        >
          {{ buttonText }}
        </button>
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
  data() {
    return {
      checkout: false,
      disabledButton: false
    };
  },
  watch: {
    cartItems: function() {
      if (this.cartItems.length === 0) {
        this.disabledButton = true;
      } else {
        this.disabledButton = false;
      }
    }
  },
  computed: {
    buttonText() {
      if (this.checkout) {
        return "return";
      } else {
        return "place order";
      }
    }
  },
  created() {
    if (this.cartItems.length === 0) {
      this.disabledButton = true;
    } else {
      this.disabledButton = false;
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
