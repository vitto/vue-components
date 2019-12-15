import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import IconItem from './IconItem.vue'
import Page from '../Page/Page.vue'
import icons from './dictionary.json'
import colors from '../../scss/data/colors.json'

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

Vue.component('icons-colors', {
  components: { IconItem },
  data () {
    return { colors }
  },
  template: `<div>
    <div v-for="(colorValue, colorName) in colors.palette.colors" style="margin-bottom: 20px">
      <div v-for="(toneValue, toneName) in colors.palette.tones" class="flex-row">
        <icon-item :class="'color-' + colorName + '-' + toneName" name="email"/>
        <code>color-{{colorName}}-{{toneName}}</code>
      </div>
    </div>
  </div>`
})

storiesOf('Icon', module)
  .add('Default', () => '<icon-item name="warning"/>')
  .add('Dictionary', () => '<icons-dictionary/>')
  .add('Colors', () => '<icons-colors/>')
