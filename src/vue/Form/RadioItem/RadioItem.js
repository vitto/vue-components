import IconItem from '../../IconItem/IconItem.vue'

export default {
  name: 'RadioItem',
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
      default: 'radio'
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
      return this.icon ? 'radio--custom' : ''
    },
    checkSize: function () {
      return this.size ? `radio--${this.size} text-sans text-sans--radio-small` : ''
    }
  }
}
