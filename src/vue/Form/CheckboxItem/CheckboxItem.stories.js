import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import CheckboxItem from './CheckboxItem.vue'
import Page from '../../Page/Page.vue'
// import colors from '../../../scss/data/colors.json'

Vue.component('page-item', Page)
Vue.component('checkbox-item', CheckboxItem)

storiesOf('Form/Checkbox', module)
  .add('Default', () => `
    <checkbox-item>
      This is a checkbox
    </checkbox-item>
  `)
  .add('Custom icon', () => `
    <checkbox-item icon="warning">
      This is a warning
    </checkbox-item>
  `)
