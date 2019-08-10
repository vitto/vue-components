import H1 from '@vue/Typography/H1/H1.vue'
import TodoItem from '@vue/Todo/TodoItem/TodoItem.vue'
import TodoInsert from '@vue/Todo/TodoInsert/TodoInsert.vue'
import data from './fixtures.json'

export default {
  name: 'TodoList',
  components: {
    H1,
    TodoItem,
    TodoInsert
  },
  data () {
    return data
  },
  methods: {
    deleteItem (id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
    },
    addItem (todo) {
      this.todos = [...this.todos, todo]
    }
  }
}
