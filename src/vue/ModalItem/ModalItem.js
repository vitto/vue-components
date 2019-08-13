import ButtonItem from '@vue/Form/ButtonItem/ButtonItem.vue'
import H3 from '@vue/Typography/H3/H3.vue'
import IconItem from '@vue/IconItem/IconItem.vue'

export default {
  name: 'ModalItem',
  props: {
    desktopMode: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'right'
    },
    isActive: {
      type: Boolean,
      default: false
    },
    title: String,
    contentOnly: {
      type: Boolean,
      default: false
    },
    hasFooter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    checkActivation: function () {
      return this.isActive ? 'modal--active' : ''
    },
    checkDesktopMode: function () {
      return this.desktopMode ? 'modal--centered' : ''
    },
    checkPosition: function () {
      return this.position ? `modal--to-${this.position}` : ''
    },
    checkTitle: function () {
      return this.title ? 'modal__contents--close-outside' : ''
    },
    checkPadding: function () {
      return this.contentOnly ? 'modal__contents--clean' : ''
    }
  },
  methods: {
    closeModal: function (event) {
      this.$emit('close-modal', false, event)
    },
    confirmModal: function (event) {
      this.$emit('confirm-modal', true, event)
    }
  },
  components: {
    ButtonItem,
    H3,
    IconItem
  }
}
