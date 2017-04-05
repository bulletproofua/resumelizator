
var myApp = angular.module('app', ['ui.router','lbServices','ngAnimate']);

myApp.config(function($stateProvider) {
  var allUsers = {
      name : 'allUsers',
      url : '/allusers',
      templateUrl: 'views/allUsers.html',
      controller: 'allUsers'
  }
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3>'
  }
  var aboutState = {
    name: 'about',
    url: '/about',
    templateUrl: 'views/allUsers.html'
  }
  var topTenSkills = {
    name: 'topTenSkills',
    url: '/topTenSkills',
    templateUrl: 'views/topTenSkills.html',
    controller: 'topTenSkills'
  }
  
  var UserInfo = {
    name: 'UserInfo',
    url: '/UserInfo/:id',
    templateUrl: 'views/UserInfo.html',
    controller: 'UserInfo'
  }
  var topThreeSkills = {
    name: 'topThreeSkills',
    url: '/topThreeSkills/:id',
    templateUrl: 'views/topThreeSkills.html',
    controller: 'topThreeSkills'
  }


  $stateProvider.state(allUsers);
  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
  $stateProvider.state(topTenSkills);
  $stateProvider.state(UserInfo);
  $stateProvider.state(topThreeSkills);
});

