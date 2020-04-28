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
  data() {
    return {
      price: 355,
      finalPrice: 355,
      items: 1
    };
  },
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
