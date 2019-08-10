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
      text: ''
    }
  },
  computed: {
    hasPlaceholderLabel () {
      return this.placeholderLabel ? 'input__field--placeholder-label' : ''
    },
    isDirty () {
      return this.text ? 'input__field--dirty' : ''
    }
  },
  methods: {
    updateValue (value) {
      console.log(value)
    }
  },
  components: {
    IconItem
  }
}
