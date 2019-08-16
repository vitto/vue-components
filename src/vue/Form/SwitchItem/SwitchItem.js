export default {
  name: 'SwitchItem',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: 'checkbox'
    }
  },
  methods: {
    updateValue (value) {
      this.$emit('input-change', value)
    }
  }
}
