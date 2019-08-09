<template lang="html">
  <label class="input">
    <div v-if="label" class="input__label text-sans text-sans--label">
      {{ label }}
    </div>
    <div class="input__row">
      <input
        :class="[hasPlaceholderLabel, isDirty]"
        :name="name"
        :placeholder="placeholder"
        v-model="text"
        v-on:blur="text = $event.target.value;"
        class="input__field"
        type="text"
      >
      <div v-if="placeholderLabel" class="input__placeholder text-sans text-sans--label">
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
