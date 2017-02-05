/**
 * Created by mark on 1/8/2017.
 */
'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $anchorScroll) {
        $scope.boolValue = true;
        $scope.mystyle = {color:'red'};
        $scope.sortorder = '-upVoteCount';
        eventData.getEvent()
            .$promise
            .then(function (event) {$scope.event = event;})
            .catch(function (response) {console.log(response);});


        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function () {
            $anchorScroll();
        }
    }
);