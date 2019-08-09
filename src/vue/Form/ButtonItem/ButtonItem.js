import IconItem from '../../IconItem/IconItem.vue'

export default {
  name: 'button-item',
  props: {
    icon: String,
    state: String,
    tone: String
  },
  components: {
    IconItem
  },
  computed: {
    buttonTone () {
      return this.tone ? `button--${this.tone}` : ''
    },
    buttonState () {
      return this.state ? `button--${this.state}` : ''
    },
    hasSlots () {
      return this.$slots.default
    },
    isIcon () {
      return this.$slots.default ? '' : 'button--is-icon'
    }
  },
  methods: {
    clicked (event) {
      this.$emit('click', true, event)
    }
  }
}
