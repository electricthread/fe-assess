// Main App file - invokes other scripts (compiled via gulp into assets/js/app.js)

'use strict';

window.feAssess = {};

$(function() {
  // Modules
  window.feAssess.Nav = new feAssess.Nav();
});