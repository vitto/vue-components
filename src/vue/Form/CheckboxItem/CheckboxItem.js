import IconItem from '../../IconItem/IconItem.vue'

export default {
  name: 'CheckboxItem',
  props: {
    checked: {
      type: [String, Number, Object, Array, Boolean],
      default: null
    },
    icon: {
      type: String
    },
    name: {
      type: String,
      default: 'checkbox'
    },
    size: String
  },
  components: {
    IconItem
  },
  methods: {
    updateValue (value) {
      this.$emit('input-change', value)
    }
  },
  computed: {
    checkCustomIcon: function () {
      return this.icon ? 'checkbox--custom' : ''
    },
    checkSize: function () {
      return this.size ? `checkbox--${this.size} text-sans text-sans--checkbox-small` : ''
    }
  }
}
