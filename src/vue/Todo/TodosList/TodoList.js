import axios from 'axios'
import H1 from '@vue/Typography/H1/H1.vue'
import TodoItem from '@vue/Todo/TodoItem/TodoItem.vue'
import TodoInsert from '@vue/Todo/TodoInsert/TodoInsert.vue'
// import data from './fixtures.json'

export default {
  name: 'TodoList',
  components: {
    H1,
    TodoItem,
    TodoInsert
  },
  data () {
    // return [...data.todos]
    return {
      todos: []
    }
  },
  methods: {
    deleteItem (id) {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => { this.todos = this.todos.filter(todo => todo.id !== id) })
        .catch(err => console.log(err))
    },
    addItem (todo) {
      const { completed, title } = todo
      axios.post('https://jsonplaceholder.typicode.com/todos', {
        completed,
        title
      })
        .then(res => { this.todos = [...this.todos, res.data] })
        .catch(err => console.log(err))
    }
  },
  created () {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => { this.todos = res.data })
      .catch(err => console.log(err))
  }
}
