define(["jquery","backbone","models/Todo"],
  function($, Backbone, Todo) {
    // Creates a new Backbone Collection class object
    var Collection = Backbone.Collection.extend({
      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: Todo
    });

    return Collection;
  });