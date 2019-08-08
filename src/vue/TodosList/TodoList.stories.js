import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import TodoList from './TodoList.vue'
import Page from '../Page/Page.vue'

Vue.component('page-item', Page)
Vue.component('todo-list', TodoList)

storiesOf('Crash tests', module)
  .add('To vue list', () => '<todo-list></todo-list>')
