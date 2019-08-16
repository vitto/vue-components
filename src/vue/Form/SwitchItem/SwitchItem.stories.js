import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import SwitchItem from './SwitchItem.vue'
import Page from '../../Page/Page.vue'

Vue.component('page-item', Page)
Vue.component('switch-item', SwitchItem)

function context (component) {
  return Vue.component('switch-example', {
    data () {
      return {
        isChecked: false
      }
    },
    components: {
      SwitchItem
    },
    template: `
      <div>
        ${component}
      </div>
    `
  })
}

storiesOf('Form/Switch', module)
  .add('Default', () => context(`
    <switch-item :checked="isChecked" @input-change="isChecked = !isChecked">
      This is {{ isChecked ? 'a checked' : 'an unchecked' }} switch
    </switch-item>
  `))
