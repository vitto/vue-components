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
    placeholderLabel: String,
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isDirty: false
    }
  },
  computed: {
    hasPlaceholderLabel: function () {
      return this.placeholderLabel ? 'input__field--placeholder-label' : ''
    },
    hasIcon: function () {
      return this.icon ? 'input--has-icon' : ''
    }
  },
  methods: {
    updateValue: function (value) {
      if (value !== '') {
        this.isDirty = true
      }
      this.$emit('input', value)
    }
  },
  components: {
    IconItem
  }
}
