import Vue from 'vue'
import { storiesOf } from '@storybook/vue'

import ModalItem from './ModalItem.vue'
import ButtonItem from '../Form/ButtonItem/ButtonItem.vue'

import data from './fixtures.json'

Vue.component('modal-item', ModalItem)

storiesOf('Modal', module)
  .add('Default', () => Vue.component('modal-example', {
    data () {
      return {
        isActive: true,
        text: data.text,
        title: data.title
      }
    },
    components: {
      ButtonItem,
      ModalItem
    },
    template: `
      <div>
        <modal-item
          :is-active="isActive"
          @close-modal="isActive = false"
        >
          {{ text }}
        </modal-item>
        <button-item @click="isActive = true">Open modal window</button-item>
      </div>
    `
  }))
  .add('Left', () => Vue.component('modal-example', {
    data () {
      return {
        isActive: true,
        text: data.text,
        title: data.title
      }
    },
    components: {
      ButtonItem,
      ModalItem
    },
    template: `
      <div>
        <modal-item
          position="left"
          :is-active="isActive"
          @close-modal="isActive = false"
        >
          {{ text }}
        </modal-item>
        <button-item @click="isActive = true">Open modal window</button-item>
      </div>
    `
  }))
  .add('Centered', () => Vue.component('modal-example', {
    data () {
      return {
        isActive: true,
        text: data.textLong,
        title: data.title
      }
    },
    components: {
      ButtonItem,
      ModalItem
    },
    template: `
      <div>
        <modal-item
          :desktopMode="true"
          :is-active="isActive"
          @close-modal="isActive = false"
        >
          {{ text }}
        </modal-item>
        <button-item @click="isActive = true">Open modal window</button-item>
      </div>
    `
  }))
  .add('Title set', () => Vue.component('modal-example', {
    data () {
      return {
        isActive: true,
        text: data.text,
        title: data.title
      }
    },
    components: {
      ButtonItem,
      ModalItem
    },
    template: `
      <div>
        <modal-item
          :is-active="isActive"
          :title="title"
          @close-modal="isActive = false"
        >
          {{ text }}
        </modal-item>
        <button-item @click="isActive = true">Open modal window</button-item>
      </div>
    `
  }))
  .add('No padding', () => Vue.component('modal-example', {
    data () {
      return {
        isActive: true,
        text: 'Useful when you need to pass custom contents inside the modal',
        title: data.title
      }
    },
    components: {
      ButtonItem,
      ModalItem
    },
    template: `
      <div>
        <modal-item
          :contentOnly="true"
          :is-active="isActive"
          :title="title"
          @close-modal="isActive = false"
        >
          {{ text }}
        </modal-item>
        <button-item @click="isActive = true">Open modal window</button-item>
      </div>
    `
  }))
  .add('Footer', () => Vue.component('modal-example', {
    data () {
      return {
        isActive: true,
        text: data.textLong,
        title: data.title
      }
    },
    components: {
      ButtonItem,
      ModalItem
    },
    template: `
      <div>
        <modal-item
          :has-footer="true"
          :is-active="isActive"
          :title="title"
          @close-modal="isActive = false"
          @confirm-modal="isActive = false"
        >
          {{ text }}
        </modal-item>
        <button-item @click="isActive = true">Open modal window</button-item>
      </div>
    `
  }))
