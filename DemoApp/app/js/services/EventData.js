eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/:id', {id:'@id'}, {"getAll": {method: "GET", isArray:true, params: {something: "foo"}}});
    return {
        getEvent: function() {
             return resource.get({id:1});
        },
        save: function (event) {
            return resource.save(event);
        }
    };
});