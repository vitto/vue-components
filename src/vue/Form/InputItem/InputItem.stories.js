import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import InputItem from './InputItem.vue'
import Page from '../../Page/Page.vue'
// import colors from '../../../scss/data/colors.json'

Vue.component('page-item', Page)
Vue.component('input-item', InputItem)

storiesOf('Form/Input', module)
  .add('Default', () => `
    <input-item/>
  `)
  .add('Label', () => `
    <input-item label="This is a label"/>
  `)
  .add('Placeholder', () => `
    <input-item placeholder="This is a placeholder"/>
  `)
  .add('Icon', () => `
    <input-item icon="email"/>
  `)
  .add('Icon', () => `
    <input-item
      icon="email"
      label="Insert your e-mail"
      placeholder="mail@gugol.com"
    />
  `)
  .add('Placeholder label', () => `
    <input-item
      icon="email"
      placeholderLabel="Insert your e-mail"
    />
  `)
