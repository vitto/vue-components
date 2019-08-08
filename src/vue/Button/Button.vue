<template>
  <button
    class="button"
    :class="state"
  >
    <div class="button__text">
      <slot/>
    </div>
  </button>
</template>

<script src="./Button.js"></script>
<style lang="scss" scoped src="./Button.scss"></style>
