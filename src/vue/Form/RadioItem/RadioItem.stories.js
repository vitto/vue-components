import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import RadioItem from './RadioItem.vue'
import Page from '../../Page/Page.vue'
// import colors from '../../../scss/data/colors.json'

Vue.component('page-item', Page)
Vue.component('radio-item', RadioItem)

function context (component) {
  return Vue.component('checkbox-example', {
    data () {
      return {
        isChecked: false
      }
    },
    components: {
      RadioItem
    },
    template: `
      <div>
        ${component}
      </div>
    `
  })
}

storiesOf('Form/Radio', module)
  .add('Default', () => context(`<div>
    <radio-item :checked="isChecked" @input-change="isChecked = !isChecked">
      This is {{ isChecked ? 'a checked' : 'an unchecked' }} radio
    </radio-item>
    <radio-item :checked="isChecked" @input-change="isChecked = !isChecked">
      This is {{ isChecked ? 'a checked' : 'an unchecked' }} radio
    </radio-item></div>
  `))
  .add('Custom icon', () => context(`
    <radio-item icon="warning" :checked="isChecked" @input-change="isChecked = !isChecked">
      {{ isChecked ? 'You have confirmed the warning' : 'Please, confirm this warning' }}
    </radio-item>
  `))
  .add('Small', () => context(`
    <radio-item size="small" :checked="isChecked" @input-change="isChecked = !isChecked">
      This is {{ isChecked ? 'a checked' : 'an unchecked' }} small radio
    </radio-item>
  `))
