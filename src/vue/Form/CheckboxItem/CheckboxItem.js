import IconItem from '../../IconItem/IconItem.vue'

export default {
  name: 'CheckboxItem',
  props: {
    checked: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String
    },
    name: {
      type: String,
      default: 'checkbox'
    }
  },
  components: {
    IconItem
  },
  methods: {
    toggleField () {
      this.checked = !this.checked
    },
    updateValue (value) {
      this.$emit('input-change', value)
    }
  }
}
