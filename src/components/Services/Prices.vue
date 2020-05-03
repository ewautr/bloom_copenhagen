<template>
  <div class="prices_item">
    <h4>{{ category }}</h4>
    <ul>
      <li class="text" v-for="service in filteredServices" :key="service.id">
        {{ service.title }} <span> {{ service.price }} dkk </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    },
    categorySlug: {
      type: String,
      required: true
    },
    services: {
      type: Array,
      required: true
    }
  },
  computed: {
    filteredServices() {
      return this.services.filter(
        service =>
          service.category[0].replace("categories/", "") === this.categorySlug
      );
    }
  }
};
</script>

<style></style>
