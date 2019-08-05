<template>
  <button
    class="button"
    v-bind:class="classObject"
  >
    <div class="button__text">
      <slot/>
    </div>
  </button>
</template>

<script>
import states from './Button.scss'

console.log(states)

export default {
  name: 'button-item',
  props: ['isActive', 'hasError'],
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./Button.scss"></style>
