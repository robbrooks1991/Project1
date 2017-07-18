/**
 * Created by cjbro on 29/06/2017.
 */

angular.module('djbuttonDirective',[]).directive('djButton', function() {
  return {
    restrict: 'EA',    // EA -> element/attribute
      scope:{
        djbio: '=info'
      },
    templateUrl: 'templates/directives/dj_button.html'
  };
});
