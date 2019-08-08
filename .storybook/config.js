import Vue from 'vue';
import { addParameters, addDecorator, configure } from '@storybook/vue'
import { themes } from '@storybook/theming';

import theme from './theme';

import '../node_modules/node-normalize-scss/_normalize.scss'
import '../node_modules/material-design-icons/iconfont/material-icons.css'
import '../node_modules/typeface-roboto/index.css'
import '../src/scss/import-global.scss'

function decorator () {
  return { name: 'decorator-item', template: '<page-item><story/></page-item>' }
}
addDecorator(decorator)

addParameters({
  options: {
    isFullscreen: false,
    showNav: true,
    showPanel: false,
    panelPosition: 'bottom',
    isToolshown: false,
    theme: theme,
  },
});

// automatically import all files ending in *.stories.js
const req = require.context('../src/vue', true, /\.stories\.js$/)
function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
