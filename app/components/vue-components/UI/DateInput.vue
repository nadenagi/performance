<template>
  <div class="date-input">
    <label :for="label" v-if="$attrs.name" v-text="`${label}:`" />
    <input
      :value="value"
      @input="(e) => $emit('input', e.target.value)"
      type="date"
      v-bind="$attrs"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.date-input {
  display: flex;
  > label {
    margin-right: 10px;
  }
}
</style>