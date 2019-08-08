import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import IconItem from './IconItem.vue'
import Page from '../Page/Page.vue'
import icons from './IconDictionary.js'

Vue.component('page-item', Page)
Vue.component('icon-item', IconItem)

storiesOf('Icon', module)
  .add('Default', () => '<icon-item name="warning"/>')
  .add('Dictionary', () => ({
    components: { IconItem },
    data: { icons },
    template: '<icon-item :name="iconName" v-for="(value, iconName) in icons"/>'
  }))
