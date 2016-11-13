define( ['App', 'backbone', 'marionette', 'jquery', './TodoView', 'hbs!templates/welcome'],
    function(App, Backbone, Marionette, $, TodoView, template) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.CollectionView.extend( {
           tagName: 'ul',
           childView: TodoView
        
    });
});