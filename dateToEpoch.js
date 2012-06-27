var dateToEpoch = (function () {

    'use strict';

    return function (date) {

        var dateObject     = new Date(date),
            timezoneOffset = dateObject.getTimezoneOffset() * 60000,
            dateInMs       = dateObject.getTime();

        return (dateInMs - timezoneOffset) / 1000;

    };

}());