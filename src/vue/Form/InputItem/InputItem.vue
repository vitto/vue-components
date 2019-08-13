<template lang="html">
  <label class="input">
    <div v-if="label" class="input__label text-sans text-sans--label">
      {{ label }}
    </div>
    <div class="input__row">
      <input
        :autocomplete="autocomplete"
        :class="[hasPlaceholderLabel, {'input__field--dirty': isDirty}]"
        :name="name"
        :placeholder="placeholder"
        :value="value"
        class="input__field"
        type="text"
        v-on:input="updateValue($event.target.value)"
        v-on:blur="updateValue($event.target.value)"
      >
      <div v-if="placeholderLabel" class="input__placeholder text-sans text-sans--placeholder">
        {{ placeholderLabel }}
      </div>
      <div v-if="icon" class="input__icon-area">
        <icon-item
          :name="icon"
        />
      </div>
      </div>
  </label>
</template>

<script src="./InputItem.js"></script>
<style lang="scss" src="./InputItem.scss"></style>
