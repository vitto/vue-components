import CheckboxItem from '@vue/Form/CheckboxItem/CheckboxItem.vue'
import ButtonItem from '@vue/Form/ButtonItem/ButtonItem.vue'

export default {
  name: 'TodoItem',
  props: ['todo'],
  components: {
    ButtonItem,
    CheckboxItem
  },
  computed: {
    todoStatus: function () {
      return this.todo.completed ? 'todo-item--completed' : ''
    }
  },
  methods: {
    toggleCompletion (e) {
      this.todo.completed = !this.todo.completed
    }
  }
}
