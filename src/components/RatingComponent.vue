<script>
import { useRatingStore } from "@/stores";
import { storeToRefs } from "pinia";

import RatingForm from "./RatingForm.vue";
import ShowResult from "./ShowResult.vue";
export default {
  name: "RatingComponent",
  components: {
    RatingForm,
    ShowResult,
  },
  setup() {
    const ratingStore = useRatingStore();
    const { showForm } = storeToRefs(ratingStore);

    return { showForm };
  },
};
</script>

<template>
  <main role="main" class="bg-neutral-700 w-md-40 w-sm-90">
    <rating-form v-if="showForm" class="animate__animated animate__flipInX" />
    <show-result v-else class="animate__animated animate__flipInX" />
  </main>
</template>

<style lang="scss">
@import "@/assets/styles/rating-component.scss";
</style>
