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
    updateValue (value) {
      this.$emit('input-change', value)
    }
  },
  computed: {
    checkCustomIcon: function () {
      return this.icon ? 'checkbox--custom' : ''
    }
  }
}
