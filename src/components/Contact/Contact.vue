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
          +45 50 18 92 91
          <br />hi@bloom.com
        </p>
        <div>
          <a
            href="https://www.google.com/maps/place/Nolia/@55.6813372,12.5915233,15z/data=!4m5!3m4!1s0x0:0x6024dc29993af236!8m2!3d55.6813372!4d12.5915233"
            target="blank"
            class="text"
          >
            <span></span>Nolia
          </a>
          <p>
            Sankt Annæ Pl. 16,
            <br />1250 København
          </p>
        </div>
      </div>
      <form action class="contact_form">
        <div class="contact_form-wrapper" :class="{ disabled: formSubmitted }">
          <input
            type="email"
            class="text"
            placeholder="your@email.com"
            minlength="5"
          />
          <label class="label">your@email.com</label>
        </div>
        <div class="contact_form-wrapper" :class="{ disabled: formSubmitted }">
          <input class="text" placeholder="your question" />
          <label class="label">your question</label>
        </div>
        <button
          type="submit"
          class="text btn"
          @click.prevent="formSubmitted = !formSubmitted"
        >
          {{ buttonContent }}
        </button>
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
span {
  background-image: url(~@/assets/pin.svg);
}
</style>
