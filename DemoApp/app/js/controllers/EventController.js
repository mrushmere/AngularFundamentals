/**
 * Created by mark on 1/8/2017.
 */
'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $routeParams, $route) {
        $scope.sortorder = '-upVoteCount';
        $scope.event = $route.current.locals.event;

        $scope.reload = function() {
          $route.reload();
        }


        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);
