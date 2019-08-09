import IconItem from '../../IconItem/IconItem.vue'
// https://vuelidate.netlify.com/

export default {
  name: 'InputItem',
  props: {
    icon: String,
    label: String,
    placeholder: String,
    placeholderLabel: String,
    name: {
      type: String,
      default: 'input-text'
    },
    value: String
  },
  computed: {
    hasPlaceholderLabel () {
      return this.placeholderLabel ? 'input__field--placeholder-label' : ''
    },
    isDirty () {
      console.log('this works once')
      return this.value ? 'input__field--dirty' : ''
    }
  },
  components: {
    IconItem
  }
}
