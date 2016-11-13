define(["jquery", "backbone"],
    function($, Backbone) {
        // Creates a new Backbone Model class object
        var Todo = Backbone.Model.extend({

            // Model Constructor
            initialize: function() {

            },

            // Default values for all of the Model attributes
            defaults: {
                 assignee: '',
                 text: ''
            },

            // Get's called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function(attrs) {
                var errors = {};
                var hasError = false;
                if (!attrs.assignee) {
                    errors.assignee = 'assignee must be set';
                    hasError = true;
                }
                if (!attrs.text) {
                    errors.text = 'text must be set';
                    hasError = true;
                }
                if (hasError) {
                    return errors;
                }
            }

        });

        // Returns the Model class
        return Todo;

    }

);