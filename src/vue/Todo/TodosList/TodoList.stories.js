import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import TodoList from './TodoList.vue'
import Page from '@vue/Page/Page.vue'

Vue.component('page-item', Page)
Vue.component('todo-list', TodoList)

storiesOf('Mini apps', module)
  .add('Todo list', () => '<todo-list/>')
