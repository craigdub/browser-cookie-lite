!function ($) {
  var ready = require('browser-cookie')
  $.ender({domReady: ready})
  $.ender({
    ready: function (f) {
      ready(f)
      return this
    }
  }, true)
}(ender);