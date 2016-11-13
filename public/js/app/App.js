define(['jquery', 'backbone', 'marionette', 'underscore', 'handlebars','models/Todo','views/test','views/layout'],
    function ($, Backbone, Marionette, _, Handlebars, ToDoModel, test, LayoutView) {
        var initialData = {
            items: [
                {assignee: 'Scott', text: 'Write a book about Marionette'},
                {assignee: 'Andrew', text: 'Do some coding'}
            ]
        };
        var App = new Backbone.Marionette.Application({
            onStart:function(options){
                var todo = new LayoutView({
                    el: "#main",
                    collection: new Backbone.Collection(initialData.items),
                    model: new ToDoModel()
                });
                todo.render();
                console.log("started app");
            }
         });

        function isMobile() {
            var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            return ((/iPhone|iPod|iPad|Android|BlackBerry|Opera Mini|IEMobile/).test(userAgent));
        }

        //Organize Application into regions corresponding to DOM elements
        //Regions can contain views, Layouts, or subregions nested as necessary
        
        App.addRegions({
            headerRegion:"header",
            mainRegion:"#main"
        });

        App.addInitializer(function () {
            Backbone.history.start();
        });

        App.mobile = isMobile();
        return App;
    });