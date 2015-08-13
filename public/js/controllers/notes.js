(function() {
  var app = angular.module('notes-controller', []);
  app.controller('NotesIndexController', function($http){
    var controller = this;
    controller.notes = [];
    $http.get('/notes').success(function(data){
      controller.notes = data
    })
  })

  app.controller("NotesShowController", function($http, $routeParams){
    var controller = this;
    controller.note = "";
    $http.get(`/notes/${$routeParams.id}`).success(function(data){
      controller.note = data;
    })
  })
}());
