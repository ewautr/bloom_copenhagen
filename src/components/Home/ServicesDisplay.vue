<template>
  <div class="display_wrapper">
    <div class="display">
      <div class="display_info">
        <div class="display_info-line"></div>
        <h4 class="display_info-subheading">hairstylist:</h4>
        <div class="display_info-line"></div>
        <div class="card" ref="card">
          <div class="card__side card__side--front">
            <img src="../../assets/card-back.png" alt="business card" />
          </div>
          <div class="card__side card__side--back">
            <h3 class="display_info-heading">Katja Hunstock</h3>
            <a
              href="https://www.google.com/maps/place/Nolia/@55.6813372,12.5915233,15z/data=!4m5!3m4!1s0x0:0x6024dc29993af236!8m2!3d55.6813372!4d12.5915233"
              class="display_info-subheading"
              target="blank"
            >
              <span></span>Nolia, Copenhagen
            </a>
            <router-link to="/services" tag="button" class="btn">see services</router-link>
          </div>
        </div>

        <div class="display_info-line"></div>
        <h4 id="products" class="display_info-subheading">selected products:</h4>
        <div class="display_info-line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.setObserver();
  },
  methods: {
    setObserver() {
      let options = {
        root: null,
        rootMargin: "-50px 0px -100px 0px",
        threshold: 1
      };

      // eslint-disable-next-line no-unused-vars
      let callback = (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("flipCard");
          } else {
            entry.target.classList.remove("flipCard");
          }
        });
      };

      let observer = new IntersectionObserver(callback, options);
      let target = document.querySelector(".card");
      observer.observe(target);
    }
  }
};
</script>

<style scoped>
span {
  background-image: url(~@/assets/pin.svg);
}
</style>
