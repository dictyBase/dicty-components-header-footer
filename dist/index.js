
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dicty-components-header-footer.cjs.production.min.js')
} else {
  module.exports = require('./dicty-components-header-footer.cjs.development.js')
}
