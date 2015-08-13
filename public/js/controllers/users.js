(function() {
  var app = angular.module('users-controller', []);
  app.controller('UsersIndexController', function($http){
    var controller = this;
    controller.notes = [];
    $http.get('/users').success(function(data){
      controller.users = data;
    })
  })
}());
