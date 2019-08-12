import IconItem from '../../IconItem/IconItem.vue'
// https://vuelidate.netlify.com/

export default {
  name: 'InputItem',
  props: {
    autocomplete: {
      type: String,
      default: 'off'
    },
    icon: String,
    label: String,
    name: {
      type: String,
      default: 'input-text'
    },
    placeholder: String,
    placeholderLabel: String
  },
  computed: {
    hasPlaceholderLabel () {
      return this.placeholderLabel ? 'input__field--placeholder-label' : ''
    },
    isDirty () {
      // return this.$attrs.value ? 'input__field--dirty' : ''
      return 'input__field--dirty'
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  },
  components: {
    IconItem
  }
}
