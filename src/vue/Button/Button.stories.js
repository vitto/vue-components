import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import Button from './Button.vue'
import Page from '../Page/Page.vue'

Vue.component('button-item', Button)

Vue.component('page-item', Page)
function decorator () {
  return { name: 'decorator-item', template: '<page-item><story/></page-item>' }
}

storiesOf('Button', module)
  .addDecorator(decorator)
  .add('with text', () => '<button-item>with text</button-item>')
  .add('with emoji', () => '<button-item>😀 😎 👍 💯</button-item>')
  .add('as a component', () => ({
    components: { Button },
    template: '<button-item :rounded="true">rounded</button-item>'
  }))
