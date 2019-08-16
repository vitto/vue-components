<template lang="html">
  <label class="switch">
    <input
      :checked="checked"
      :name="name"
      @change="updateValue($event.target.checked)"
      class="switch__field"
      type="checkbox"
    />
    <div class="switch__box">
      <div class="switch__dot"></div>
    </div>
    <div class="switch__text">
      <slot/>
    </div>
  </label>
</template>

<script src="./SwitchItem.js"></script>
<style lang="scss" src="./SwitchItem.scss"></style>
