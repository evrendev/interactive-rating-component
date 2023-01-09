<script>
import { storeToRefs } from "pinia";
import { useRatingStore } from "@/stores";

import SvgIcon from "./SvgIcon.vue";

export default {
  name: "ShowResult",
  components: {
    SvgIcon,
  },
  setup() {
    const ratingStore = useRatingStore();

    const { rating } = storeToRefs(ratingStore);
    return { rating };
  },
};
</script>

<template>
  <div class="result">
    <div class="flex justify-content-center">
      <svg-icon :name="'illustration-thank-you'" />
    </div>
    <div class="flex justify-content-center">
      <span class="choice bg-neutral-600 text-primary-400">
        You selected {{ rating }} out of 5
      </span>
    </div>
    <div class="flex justify-content-center">
      <h1 class="fs-800">Thank You!</h1>
    </div>
    <div class="flex justify-content-center">
      <p class="text-neutral-400 text-center">
        We appreciate you taking the time to give a rating. If you ever need more support, don't
        hesitate tot get in touch!
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/show-result.scss";
</style>
