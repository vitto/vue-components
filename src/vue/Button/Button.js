export default {
  name: 'button-item',
  props: {
    state: {
      type: String,
      default: 'button--default'
    }
  },
  computed: {
    class () {
      return (this.state ? `button--${this.state}` : '')
    }
  }
}
