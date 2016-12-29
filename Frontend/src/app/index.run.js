(function() {
  'use strict';

  angular
    .module('messageBoard')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
