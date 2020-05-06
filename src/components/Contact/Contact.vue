<template>
  <div class="contact-wrapper">
    <div class="contact">
      <div class="contact_img"></div>
      <div class="contact_img">
        <img src="../../assets/fp-img4.png" alt />
      </div>
      <div class="contact_img">
        <img src="../../assets/contact-img.png" alt />
      </div>
      <h1 class="contact_heading">
        Make it
        <br />organic.
      </h1>
      <div class="contact_text">
        <h4>We are</h4>
        <h4>available at</h4>
        <h4>based in</h4>
        <p>
          BLOOM Copenhagen
          <br />Katja Hunstock
        </p>
        <p>
          +45 603 512 056
          <br />hi@bloom.com
        </p>
        <p>
          Nyhavn 1-71
          <br />1051 København K
        </p>
      </div>
      <form action class="contact_form">
        <div class="contact_form-wrapper" :class="{'disabled': formSubmitted}">
          <input type="email" class="text" placeholder="your@email.com" minlength="5" />
          <label class="label">your@email.com</label>
        </div>
        <div class="contact_form-wrapper" :class="{'disabled': formSubmitted}">
          <input class="text" placeholder="your question" />
          <label class="label">your question</label>
        </div>
        <button
          type="submit"
          class="text btn"
          @click.prevent="formSubmitted = !formSubmitted"
        >{{ buttonContent }}</button>
      </form>
      <div class="contact_line"></div>
      <div class="contact_line"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formSubmitted: false
    };
  },
  computed: {
    buttonContent() {
      if (this.formSubmitted) {
        return "question submitted";
      } else {
        return "submit";
      }
    }
  }
};
</script>

<style scoped>
</style>
