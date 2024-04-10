
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./lcep-storyblok-component.cjs.production.min.js')
} else {
  module.exports = require('./lcep-storyblok-component.cjs.development.js')
}
