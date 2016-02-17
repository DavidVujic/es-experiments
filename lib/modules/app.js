define([], function () {
  'use strict';

  var message = function message() {
    return 'hello world';
  };

  document.querySelector('#message-container').innerHTML = message();
});