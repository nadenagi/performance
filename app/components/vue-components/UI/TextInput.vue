<template>
  <div class="text-input">
    <div v-if="value" class="text-input--label">
      {{ customLabel || $attrs.placeholder }}
    </div>
    <div class="text-input__group">
      <input
        v-bind="$attrs"
        @input="(v) => $emit('input', v.target.value)"
        type="text"
        :style="{borderRadius: $attrs.value ? '10px 0 0 10px' : '10px'}"
      />
      <button v-if="clearable && $attrs.value" @click="clear">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "text-input",
  props: {
    customLabel: {
      type: String,
      required: false,
    },
    clearable: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    clear() {
      this.$emit("input", "");
    },
  },
  computed: {
    value() {
      return this.$attrs.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.text-input {
  display: flex;
  align-items: center;
  flex-direction: column;
  &--label {
    width: 100%;
    text-align: left;
  }
  &__group {
    display: flex;
    width: 100%;
    > input {
      flex: 1;
      padding: 5px 10px;
      border: none;
      &:focus {
        outline: none;
      }
    }
    > button {
      background: #ffffff;
      color: rgb(219, 53, 53);
      padding: 10px 15px;
      border-radius: 0 10px 10px 0;
    }
  }
}
</style>