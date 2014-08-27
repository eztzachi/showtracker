/**
 * Created by Tzachi on 27/08/2014.
 */
angular.module('MyApp').
    filter('fromNow', function() {
        return function(date) {
            return moment(date).fromNow();
        }
    });