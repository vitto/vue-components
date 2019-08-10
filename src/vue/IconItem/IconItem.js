import dictionary from './dictionary.json'
const defaultName = 'missingIcon'

export default {
  name: 'IconItem',
  props: {
    name: {
      type: String,
      default: defaultName
    }
  },
  computed: {
    icon: function () {
      return dictionary[this.name] || this.name
    }
  }
}
