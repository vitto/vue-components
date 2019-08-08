import dictionary from './IconDictionary.js'

export default {
  name: 'IconItem',
  props: {
    name: {
      type: String,
      default: 'missingIcon'
    }
  },
  computed: {
    icon: function () {
      return dictionary[this.name]
    }
  }
}
