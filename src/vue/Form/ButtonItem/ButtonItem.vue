<template>
  <button
    class="button"
    :class="[buttonTone, buttonState, isIcon]"
    @click="clicked"
  >
    <icon-item v-if="icon" :name="icon" class="button__icon"/>
    <div v-if="hasSlots" class="button__text">
      <slot/>
    </div>
  </button>
</template>

<script src="./ButtonItem.js"></script>
<style lang="scss" src="./ButtonItem.scss"></style>
