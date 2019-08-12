import IconItem from '../../IconItem/IconItem.vue'
// https://vuelidate.netlify.com/

export default {
  name: 'InputItem',
  props: {
    autocomplete: { type: String, default: 'off' },
    icon: { type: String },
    label: { type: String },
    name: { type: String, default: 'input-text' },
    placeholder: { type: String },
    placeholderLabel: { type: String }
  },
  data: function () {
    return {
      value: ''
    }
  },
  computed: {
    hasPlaceholderLabel () {
      return this.placeholderLabel ? 'input__field--placeholder-label' : ''
    },
    isDirty () {
      return this.value ? 'input__field--dirty' : ''
    }
  },
  methods: {
    updateValue: function (value) {
      this.value = value
      this.$emit('input', this.value)
    }
  },
  components: {
    IconItem
  }
}
