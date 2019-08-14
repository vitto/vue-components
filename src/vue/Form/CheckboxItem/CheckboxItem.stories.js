import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import CheckboxItem from './CheckboxItem.vue'
import Page from '../../Page/Page.vue'
// import colors from '../../../scss/data/colors.json'

Vue.component('page-item', Page)
Vue.component('checkbox-item', CheckboxItem)

storiesOf('Form/Checkbox', module)
  .add('Default', () => Vue.component('checkbox-example', {
    data () {
      return {
        isChecked: true
      }
    },
    components: {
      CheckboxItem
    },
    template: `
      <div>
        <checkbox-item :checked="isChecked" @input-change="isChecked = !isChecked">
          This is a {{ isChecked ? 'checked' : 'unchecked' }} checkbox
        </checkbox-item>
      </div>
    `
  }))
  .add('Custom icon', () => `
    <checkbox-item icon="warning" v-model="isChecked">
      This is a warning
    </checkbox-item>
  `)
