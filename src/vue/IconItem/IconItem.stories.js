import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import IconItem from './IconItem.vue'
import Page from '../Page/Page.vue'
import icons from './dictionary.json'
// import colors from '../../../scss/data/colors.json'

Vue.component('page-item', Page)
Vue.component('icon-item', IconItem)
Vue.component('icons-dictionary', {
  components: { IconItem },
  data () {
    return { icons }
  },
  template: `<div>
    <div v-for="(value, iconName) in icons" class="flex-row">
      <icon-item :name="iconName"/>
      <code>{{iconName}}</code>
    </div>
  </div>`
})

storiesOf('Icon', module)
  .add('Default', () => '<icon-item name="warning"/>')
  .add('Dictionary', () => '<icons-dictionary/>')
