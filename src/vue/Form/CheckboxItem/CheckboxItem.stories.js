import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import CheckboxItem from './CheckboxItem.vue'
import Page from '../../Page/Page.vue'
// import colors from '../../../scss/data/colors.json'

Vue.component('page-item', Page)
Vue.component('checkbox-item', CheckboxItem)

function context (component) {
  return Vue.component('checkbox-example', {
    data () {
      return {
        isChecked: false
      }
    },
    components: {
      CheckboxItem
    },
    template: `
      <div>
        ${component}
      </div>
    `
  })
}

storiesOf('Form/Checkbox', module)
  .add('Default', () => context(`
    <checkbox-item :checked="isChecked" @input-change="isChecked = !isChecked">
      This is {{ isChecked ? 'a checked' : 'an unchecked' }} checkbox
    </checkbox-item>
  `))
  .add('Custom icon', () => context(`
    <checkbox-item icon="warning" :checked="isChecked" @input-change="isChecked = !isChecked">
      {{ isChecked ? 'You have confirmed the warning' : 'Please, confirm this warning' }}
    </checkbox-item>
  `))
