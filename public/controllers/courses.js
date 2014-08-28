/**
 * Created by Tzachi on 29/08/2014.
 */
/**
 * Created by Tzachi on 27/08/2014.
 */



angular.module('MyApp')
    .controller('CoursesCtrl', ['$scope',
        function ($scope) {
            $scope.courses = [
                "Why Guitar?",
                "Trumpet Therapy"
            ];
        }]);