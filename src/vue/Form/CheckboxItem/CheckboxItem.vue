<template lang="html">
  <label class="checkbox">
    <input
      :checked="checked"
      :name="name"
      @click="clicked"
      class="checkbox__field"
      type="checkbox"
    />
    <icon-item :name="icon ? icon : 'formCheckboxUnchecked'" class="checkbox__icon" />
    <icon-item :name="icon ? icon : 'formCheckboxChecked'" class="checkbox__icon" />
    <div class="checkbox__text">
      <slot/>
    </div>
  </label>
</template>

<script src="./CheckboxItem.js"></script>
<style lang="scss" src="./CheckboxItem.scss"></style>
