/**
 * Created by Tzachi on 24/08/2014.
 */
angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
//        $locationProvider.html5Mode(true); TODO: currently causes back when returns to homepage
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'MainCtrl'
            })
            .when('/shows/:id', {
                templateUrl: 'views/detail.html',
                controller: 'DetailCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupCtrl'
            })
            .when('/add', {
                templateUrl: 'views/add.html',
                controller: 'AddCtrl'
            }).when('/courses', {
                templateUrl: 'views/courses.html',
                controller: 'CoursesCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });

    }]);