define( ['App', 'backbone', 'marionette', 'jquery', 'models/Model', 'hbs!templates/test'],
    function(App, Backbone, Marionette, $, Model, template) {
     return Backbone.Marionette.ItemView.extend({
            tagName: 'li',
            template: template
            
       });

           
});