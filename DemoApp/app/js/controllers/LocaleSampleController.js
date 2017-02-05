/**
 * Created by mark on 2/5/2017.
 */
'use strict';

eventsApp.controller('LocaleSampleController',
    function CompileSampleController($scope, $locale, $timeout) {

        setTimeout(function () {
            $scope.name = "john doe";
        }, 3000);

        $scope.cancel = function () {
            $timeout.cancel(promise);
        };

        $scope.myDate = Date.now();
        $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;
    }
);