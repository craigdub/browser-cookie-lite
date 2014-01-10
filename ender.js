!function ($) {
  var ready = require('browser-cookie-lite-ender')
  $.ender({cookie: Cookie})
  $.ender({
    ready: function (f) {
      ready(f)
      return this
    }
  }, true)
}(ender);