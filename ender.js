!function ($) {
  var ready = require('browser-cookie-lite-ender')
  $.ender({domReady: ready})
  $.ender({
    ready: function (f) {
      ready(f)
      return this
    }
  }, true)
}(ender);