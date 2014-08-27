/**
 * Created by Tzachi on 27/08/2014.
 */
angular.module('MyApp')
    .controller('SignupCtrl', ['$scope', 'Auth', function ($scope, Auth) {
        $scope.signup = function () {
            Auth.signup({
                email: $scope.email,
                password: $scope.password
            });
        };
    }]);