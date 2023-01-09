<template>
  <div>
    <input
      type="radio"
      :name="name"
      :id="inputId()"
      :value="value"
      :checked="checked"
      @change="updateRating"
    />
    <label :for="inputId()" class="bg-neutral-600 text-neutral-400">{{ value }}</label>
  </div>
</template>

<script>
export default {
  name: "RadioButton",
  emits: ["changeRating"],
  setup(props, { emit }) {
    const updateRating = (el) => {
      const rating = el.target.value;
      emit("changeRating", rating);
    };

    return { updateRating };
  },
  props: {
    name: { type: String, default: "rating", required: true },
    value: { type: Number, default: 1, required: true },
    checked: { type: Boolean, default: false, required: true },
  },
  methods: {
    inputId() {
      return `${this.name}-value-${this.value}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/radio-button.scss";
</style>
