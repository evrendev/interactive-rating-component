import { defineStore } from "pinia";

export const useRatingStore = defineStore("ratingStore", {
  state: () => ({
    showForm: true,
    rating: null,
  }),
  actions: {
    updateRating(value) {
      this.rating = value;
      this.showForm = false;
    },
  },
});
