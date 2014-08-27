/**
 * Created by Tzachi on 27/08/2014.
 */
angular.module('MyApp')
    .controller('LoginCtrl', ['$scope', 'Auth', function ($scope, Auth) {
        $scope.login = function () {
            Auth.login({
                email: $scope.email,
                password: $scope.password
            });
        };
    }]);