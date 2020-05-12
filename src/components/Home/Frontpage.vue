<template>
  <div class="frontpage-wrapper">
    <div class="frontpage">
      <div class="frontpage_line line"></div>
      <div class="frontpage_item fp-slide-box"></div>
      <div class="frontpage_item fp-slide-box"></div>
      <div class="frontpage_item fp-slide-box"></div>
      <div class="frontpage_item rellax" data-rellax-speed="-3">
        <img
          class="fp-slide-img frontpage_img"
          src="../../assets/fp-img3.png"
          alt
        />
      </div>
      <div class="frontpage_item rellax" data-rellax-speed="-2">
        <img class="fp-slide-img" src="../../assets/fp-img2.png" alt />
      </div>
      <div class="frontpage_item rellax" data-rellax-speed="-1">
        <img class="fp-slide-img" src="../../assets/fp-img1.png" alt />
      </div>

      <div class="frontpage_item rellax" data-rellax-speed="-4">
        <img class="fp-slide-img" src="../../assets/fp-img4.png" alt />
      </div>

      <h1 class="frontpage_heading ">
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
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const rellax = new Rellax(".rellax");
  }
};
</script>

<style></style>
