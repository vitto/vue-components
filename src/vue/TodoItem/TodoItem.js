import CheckboxItem from '../Form/CheckboxItem/CheckboxItem.vue'
import ButtonItem from '../Form/ButtonItem/ButtonItem.vue'

export default {
  name: 'TodoItem',
  props: ['todo'],
  components: {
    ButtonItem,
    CheckboxItem
  },
  computed: {
    todoStatus: function () {
      return this.todo.isComplete ? 'todo-item--complete' : ''
    }
  },
  methods: {
    toggleCompletion (e) {
      this.todo.isComplete = !this.todo.isComplete
      console.log(this.todo.isComplete)
    }
  }
}
