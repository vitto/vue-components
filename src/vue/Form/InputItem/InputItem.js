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
    }
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
