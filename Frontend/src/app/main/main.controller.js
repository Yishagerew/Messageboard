(function () {
  'use strict';

  angular
    .module('messageBoard')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.postmessage = postMessage;

    function postMessage() {
      console.log("Heloo there");
    }

  }
})();
