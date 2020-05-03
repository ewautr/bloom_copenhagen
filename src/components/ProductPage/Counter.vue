<template>
  <div class="counter">
    <h3 class="counter_price">{{ finalPrice }} dkk</h3>
    <div class="counter_increase">
      <p>QTY</p>
      <p>
        <span @click="lessItems">-</span>
        {{ items }}
        <span @click="moreItems">+</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    currentprice: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      price: this.currentprice,
      finalPrice: this.currentprice,
      items: 1
    };
  },
  // watch() {
  //   if (this.currentprice) {
  //     this.price = this.currentProductPrice;
  //     this.finalPrice = this.currentProductPrice;
  //   }
  // },
  methods: {
    moreItems() {
      this.items++;
      this.finalPrice = this.price * this.items;
    },
    lessItems() {
      if (this.items >= 2) {
        this.items--;
        this.finalPrice = this.price * this.items;
      }
    }
  }
};
</script>

<style></style>
