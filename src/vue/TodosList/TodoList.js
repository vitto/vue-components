import H1 from '../Typography/H1/H1.vue'
import TodoItem from '../TodoItem/TodoItem.vue'
import data from './fixtures.json'

export default {
  name: 'TodoList',
  components: {
    H1,
    TodoItem
  },
  data () {
    return data
  }
}
