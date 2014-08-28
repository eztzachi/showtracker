/**
 * Created by Tzachi on 28/08/2014.
 */
angular.module('MyApp')
    .controller('NavbarCtrl', ['$scope', 'Auth', function ($scope, Auth) {
        $scope.logout = function () {
            Auth.logout();
        };
    }]);