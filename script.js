// Code goes here

(function(){
'use strict';

  var MyCtrl = function($scope){
    
    function htmlDecode(input) {
        var e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes[0].nodeValue;
    }
    
        $scope.theOptions = [
          {
            'label': htmlDecode('The Opt &#xe006;'),
            'id': 3
          }
        ]
  }

  angular.module('app', [])
  .controller('MyCtrl', MyCtrl)

})();