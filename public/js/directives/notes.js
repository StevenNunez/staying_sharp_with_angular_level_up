(function() {
  var app = angular.module('notes-directives', []);
  app.directive('fisNote', function(){
    var num = 1;
    return {
      restrict: "E",
      scope: {
        note: "="
      },
      templateUrl: '/templates/pages/notes/fis-note.html',
      controller: function($scope){
        $scope.title = `Note Title ${num++}`;
      },
      link: function(scope, element, attrs){
        var self = element;
        scope.show = false;
        element.find('a').on('click', function(e){
          console.log 
          e.preventDefault();
        })
      }
    }
  })
}());
