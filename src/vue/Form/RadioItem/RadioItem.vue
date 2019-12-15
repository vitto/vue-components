<template lang="html">
  <label class="radio" :class="[checkCustomIcon, checkSize]">
    <input
      :checked="checked"
      :name="name"
      @change="updateValue($event.target.checked)"
      class="radio__field"
      type="radio"
    />
    <icon-item :name="icon ? icon : 'formCheckboxUnchecked'" class="radio__icon" />
    <icon-item :name="icon ? icon : 'formCheckboxChecked'" class="radio__icon" />
    <div class="radio__text">
      <slot/>
    </div>
  </label>
</template>

<script src="./RadioItem.js"></script>
<style lang="scss" src="./RadioItem.scss"></style>
