/* global $ */

$(function () {
  var $app = $('#app');
  var $h1 = $('<h1>');
  var heading = 'Hello, Node.js';
  
  $h1.text(heading);
  $app.append($h1);
});