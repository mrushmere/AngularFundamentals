/**
 * Created by mark on 1/8/2017.
 */
'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.snippet = '<span style="color:red">hi there</span>';
        $scope.boolValue = true;
        $scope.mystyle = {color:'red'};
        $scope.sortorder = '-upVoteCount';
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '1/8/2016',
            time: '4:25 pm',
            location: {
                address: 'Angular Boot Camp',
                city: 'Pittsburgh',
                state: 'Pennsylvania'
            },
            imageUrl: '/img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directive Masterclass',
                    creatorName: 'Bob Smith',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'In this sesion blah blah blah....',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Dude Man',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'Session for scopes',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behavied Controller',
                    creatorName: 'Some Guy',
                    duration: '1 hr',
                    level: 'Advanced',
                    abstract: 'Session for Controllers',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    }
);