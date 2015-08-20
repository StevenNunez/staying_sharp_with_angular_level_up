(function() {
  var app = angular.module('notes-directives', []);
  app.directive('fisNote', function(){
    return {
      restrict: "E",
      templateUrl: '/templates/pages/notes/fis-note.html',
      controller: function($scope){
        $scope.title = "Note Title"
      }
    }
  })
}());
