<template>
  <div class="frontpage-wrapper">
    <div class="frontpage" @resize="checkScreenSize()">
      <div class="frontpage_line line"></div>
      <div class="frontpage_item fp-slide-box"></div>
      <div class="frontpage_item fp-slide-box">
        <img
          v-if="!isMobile"
          class="fp-slide-img frontpage_img"
          src="../../assets/scissors.png"
          alt
        />
        <img v-else class="fp-slide-img frontpage_img" src="../../assets/hand-img-mobile.png" alt />
      </div>
      <div class="frontpage_item fp-slide-box"></div>
      <div class="frontpage_item rellax" data-rellax-speed="-3">
        <img class="fp-slide-img frontpage_img" src="../../assets/fp-img3.png" alt />
      </div>
      <div class="frontpage_item rellax" data-rellax-speed="-2">
        <img v-if="!isMobile" class="fp-slide-img" src="../../assets/fllowers.png" alt />
        <img v-else class="fp-slide-img" src="../../assets/scissors-mobile.png" alt />
      </div>
      <div class="frontpage_item rellax" data-rellax-speed="-1">
        <img v-if="!isMobile" class="fp-slide-img" src="../../assets/hand-img.png" alt />
        <img v-else class="fp-slide-img" src="../../assets/fllower-mobile.png" alt />
      </div>
      <div class="frontpage_item rellax" data-rellax-speed="-4">
        <img v-if="!isMobile" class="fp-slide-img" src="../../assets/logo-transparent.png" alt />
        <img v-else class="fp-slide-img" src="../../assets/logo-transparent-mobile.png" alt />
      </div>

      <h1 class="frontpage_heading">
        <span class="fp-slide-img">
          hair care
          <br />by Katja
        </span>
      </h1>
      <div class="frontpage_line line"></div>
    </div>
  </div>
</template>

<script>
import Rellax from "rellax";

export default {
  data() {
    return {
      isMobile: false
    };
  },
  mounted() {
    this.checkScreenSize();
    // eslint-disable-next-line no-unused-vars
    const rellax = new Rellax(".rellax");
  },
  methods: {
    checkScreenSize() {
      console.log(window.innerWidth);
      if (window.innerWidth <= "770") {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    }
  }
};
</script>

<style></style>
