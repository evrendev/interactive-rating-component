<script>
import { useRatingStore } from "@/stores";

import SvgIcon from "./SvgIcon.vue";
import RadioButton from "./RadioButton.vue";
import { ref } from "vue";

export default {
  name: "RatingForm",
  components: {
    SvgIcon,
    RadioButton,
  },
  setup() {
    let rating = ref();
    const ratingStore = useRatingStore();

    const sendForm = () => {
      if (rating.value) {
        ratingStore.updateRating(rating.value);

        setTimeout(() => {
          ratingStore.$reset();
        }, 3000);
      } else {
        alert("You should choose a rating before send!");
      }
    };

    const updateRating = (value) => {
      rating.value = value;
    };

    return { sendForm, updateRating, rating };
  },
};
</script>

<template>
  <div class="form">
    <div>
      <div class="favorite bg-neutral-600">
        <svg-icon :name="'icon-star'" />
      </div>
    </div>
    <div>
      <h1 class="fw-bold fs-800">How did we do?</h1>
    </div>
    <div>
      <p class="text-neutral-300">
        Please let us know how we did with your support request. All feedback is appreciated to help
        us improve our offering!
      </p>
    </div>
    <div class="flex flex-direction-row justify-content-space-between">
      <radio-button
        v-for="i in 5"
        :key="i"
        name="rating"
        :value="i"
        :checked="i == rating"
        v-model="rating"
        @changeRating="updateRating"
      />
    </div>
    <div>
      <button type="submit" @click="sendForm" class="bg-primary-400 text-neutral-100 fw-bold">
        Submit
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/rating-form.scss";
</style>
