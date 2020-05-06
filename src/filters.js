import Vue from "vue";

Vue.filter("capitalize", function(value) {
  if (!value) return "";
  value = value
    .toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
  return value;
});
