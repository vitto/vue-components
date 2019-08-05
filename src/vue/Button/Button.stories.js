import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import Button from './Button.vue'
Vue.component('button-item', Button)

storiesOf('Button', module)
  .add('with text', () => '<button-item>with text</button-item>')
  .add('with emoji', () => '<button-item>😀 😎 👍 💯</button-item>')
  .add('as a component', () => ({
    components: { Button },
    template: '<button-item :rounded="true">rounded</button-item>'
  }))
