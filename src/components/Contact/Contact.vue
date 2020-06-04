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
      <div class="contact_text rellax" data-rellax-speed="1">
        <h4>{{ content.name_title }}</h4>
        <h4>{{ content.address_title }}</h4>
        <h4>{{ content.contact_title }}</h4>
        <p v-html="content.name_content"></p>

        <div>
          <a :href="`${content.salon_link}`" target="blank" class="text">
            <span></span>
            {{ content.salon_name }}
          </a>
          <p v-html="content.address_content"></p>
        </div>
        <p v-html="content.contact_content"></p>
      </div>
      <h4 class="contact_form-title">Let's get in touch:</h4>
      <form action="/statamic/!/Form/create" ref="form" class="contact_form" target="frame">
        <input type="hidden" name="_token" value="TxsDdPU7NjovOTrDgwXcNFnwP6oMwPIHFmyt94QU" />
        <input
          type="hidden"
          name="_params"
          value="eyJpdiI6IlVETmJtQTNKbUVMWklTRlpvdUxwMVE9PSIsInZhbHVlIjoiSklYY1dFbVdIdHhEamVMMFhDZ3BwVERSazlzb2pWSnlHSVwvajNVV1RvVDJXR0VJVk5ubFwvcjdOamZCdVhOaHB5IiwibWFjIjoiNzMxYmI1YmNkOGExMjFlOGEwOTE5NjIyYTU3Nzc3MWUzMTY2YTYxZDk1YjUxNGMxNzVjNDE4OTA1NGQzNWUxZSJ9"
        />
        <div class="contact_form-wrapper" :class="{ disabled: formSubmitted }">
          <input
            id="email"
            type="email"
            class="text"
            placeholder="your@email.com"
            minlength="5"
            v-model="email"
            name="email"
          />
          <label for="email" class="label">your@email.com</label>
        </div>
        <div class="contact_form-wrapper" :class="{ disabled: formSubmitted }">
          <input
            id="message"
            class="text"
            placeholder="your message"
            v-model="message"
            name="message"
          />
          <label for="message" class="label">your message</label>
        </div>
        <button type="submit" @click="submitForm" class="text btn">{{ buttonContent }}</button>
      </form>
      <div class="contact_line"></div>
      <div class="contact_line"></div>
    </div>
    <iframe name="frame" style="display: none;"></iframe>
  </div>
</template>

<script>
import Rellax from "rellax";

export default {
  data() {
    return {
      formSubmitted: false,
      email: "",
      message: "",
      content: []
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
  created() {
    this.fetchContent();
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const rellax = new Rellax(".rellax");
  },
  methods: {
    fetchContent() {
      // GET /someUrl
      this.$http
        .get("https://ewautracka.com/bloom/statamic/!/Fetch/page/contact")
        .then(response => {
          // get body data
          this.content = response.body.data;
        });
    },
    submitForm() {
      this.formSubmitted = !this.formSubmitted;
      this.$refs.form.reset();
    }
  }
};
</script>

<style scoped>
span {
  background-image: url(~@/assets/pin.svg);
}
</style>
