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
        <h4>I am</h4>
        <h4>based in</h4>
        <h4>orders/bookings</h4>
        <p>
          BLOOM Copenhagen
          <br />Katja Hunstock
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
        <p>
          +45 50 18 92 91
          <br />hi@bloom.com
        </p>
      </div>
      <h4 class="contact_form-title">Let's get in touch:</h4>
      <form action class="contact_form">
        <div class="contact_form-wrapper" :class="{ disabled: formSubmitted }">
          <input
            type="email"
            class="text"
            placeholder="your@email.com"
            minlength="5"
            v-model="email"
          />
          <label class="label">your@email.com</label>
        </div>
        <div class="contact_form-wrapper" :class="{ disabled: formSubmitted }">
          <input class="text" placeholder="your message" v-model="message" />
          <label class="label">your message</label>
        </div>
        <button
          type="submit"
          class="text btn"
          @click.prevent="formSubmitted = !formSubmitted"
          @click="post()"
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
      formSubmitted: false,
      email: "",
      message: ""
    };
  },
  computed: {
    buttonContent() {
      if (this.formSubmitted) {
        return "message submitted";
      } else {
        return "submit";
      }
    }
  },
  methods: {
    post() {
      const newData = {
        email: this.email,
        message: this.message
      };
      const postData = JSON.stringify(newData);

      fetch(
        `http://ewautracka.com/bloom/statamic/!/Fetch/collection/messages`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
          },
          body: postData
        }
      )
        .then(res => res.json())
        .then(() => {});
    }
  }
};
</script>

<style scoped>
span {
  background-image: url(~@/assets/pin.svg);
}
</style>
