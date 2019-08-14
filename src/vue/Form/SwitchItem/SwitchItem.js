import IconItem from '../../IconItem/IconItem.vue'

export default {
  name: 'SwitchItem',
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
    clicked (event) {
      this.$emit('click', this.checked, event)
    }
  }
}
