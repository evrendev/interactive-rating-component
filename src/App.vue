<script>
import RatingComponent from "./components/RatingComponent.vue";
export default {
  name: "App",
  components: {
    RatingComponent,
  },
  setup() {
    return {};
  },
};
</script>

<template>
  <rating-component />
</template>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
