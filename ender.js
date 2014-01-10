!function ($) {
  var ready = require('browser-cookie-lite-ender')
  $.ender({cookie: Cookie})
  $.ender({
    Cookie: function (f) {
      Cookie(f)
      return this
    }
  }, true)
}(ender);