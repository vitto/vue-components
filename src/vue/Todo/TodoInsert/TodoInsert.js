import ButtonItem from '@vue/Form/ButtonItem/ButtonItem.vue'
import InputItem from '@vue/Form/InputItem/InputItem.vue'
import uuid from 'uuid'

export default {
  name: 'TodoInsert',
  components: {
    ButtonItem,
    InputItem
  },
  data () {
    return {
      title: ''
    }
  },
  methods: {
    setValue (data) {
      this.title = data
    },
    addItem (e) {
      e.preventDefault()
      const todo = {
        id: uuid.v4(),
        isChecked: false,
        title: this.title
      }
      this.$emit('add-todo', todo)
    }
  }
}
