'use strict';

eventsApp.controller('EventController',
    function EventController($scope){
        $scope.event = {
            name: 'Angular Boot Camp',
            date: '11/8/1977',
            time: '10:30 am',
            location: {
                address: '19 Parkwood Pl'
            },
            imageUrl: 'http://angularjs.org/img/AngularJS-large.png',
            sessions: {

            }
        }
    }
);
