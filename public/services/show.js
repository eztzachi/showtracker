/**
 * Created by Tzachi on 27/08/2014.
 */
angular.module('MyApp')
    .factory('Show', ['$resource', function ($resource) {
        return $resource('/api/shows/:_id');
    }]);