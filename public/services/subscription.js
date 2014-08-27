/**
 * Created by Tzachi on 27/08/2014.
 */
angular.module('MyApp')
    .factory('Subscription', ['$http', function($http) {
        return {
            subscribe: function(show, user) {
                return $http.post('/api/subscribe', { showId: show._id });
            },
            unsubscribe: function(show, user) {
                return $http.post('/api/unsubscribe', { showId: show._id });
            }
        };
    }]);