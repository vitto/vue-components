import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import scssImport from './Button.scss'

import Button from './Button.vue'
import Page from '../Page/Page.vue'

Vue.component('button-item', Button)
Vue.component('page-item', Page)

const states = scssImport.states.toString().split(' ').sort()
const modifiers = {}
states.forEach(function (state) {
  modifiers[`modifier--${state}`] = state
})
console.log(states)

storiesOf('Button', module)
  .add('with text', () => `<button-item :state="'danger'">with text</button-item>`)
  .add('with emoji', () => '<button-item>😀 😎 👍 💯</button-item>')
  .add('as a component', () => ({
    components: { Button },
    template: '<button-item :rounded="true">rounded</button-item>'
  }))
