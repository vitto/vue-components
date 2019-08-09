import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import ButtonItem from './ButtonItem.vue'
import Page from '../../Page/Page.vue'

import styles from './ButtonItem.export.scss'

const states = styles.states.split(' ').sort()
const tones = styles.tones.split(' ').sort()

Vue.component('button-item', ButtonItem)
Vue.component('page-item', Page)

Vue.component('button-states', {
  components: { ButtonItem },
  data () {
    return { states }
  },
  template: `
    <div>
      <div v-for="state in states" class="flex-row">
        <button-item :state="state">{{state}}</button-item>
        <code>{{state}}</code>
      </div>
    </div>
  `
})

Vue.component('button-tones', {
  components: { ButtonItem },
  data () {
    return { tones }
  },
  template: `
    <div>
      <div v-for="tone in tones" class="flex-row">
        <button-item :tone="tone">{{tone}}</button-item>
        <code>{{tone}}</code>
      </div>
    </div>
  `
})

storiesOf('Form/Button', module)
  .add('Default', () => `
    <button-item>Default</button-item>
  `)
  .add('Icon and text', () => `
    <button-item icon="error">
      Icon and text
    </button-item>
  `)
  .add('Icon only', () => `
    <button-item icon="warning" tone="warning"/>
  `)
  .add('States', () => `
    <button-states/>
  `)
  .add('Tones', () => `
    <button-tones/>
  `)
  .add('Small, icon, text', () => `
    <button-item icon="shipping" state="small">
      Small and icon
    </button-item>
  `)
  .add('Small and icon', () => `
    <button-item icon="warning" tone="warning" state="small"/>
  `)
