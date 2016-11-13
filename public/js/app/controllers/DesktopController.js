define(['App', 'backbone', 'marionette', 'views/TodoView','views/TodoCollectionView','views/layout','models/Todo'],
    function (App, Backbone, Marionette, TodoView,TodoCollectionView,LayoutView,ToDoModel) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            this.options = options;
            //App.headerRegion.show(new DesktopHeaderView());
        },
        //gets mapped to in AppRouter's appRoutes
        index:function () {

          App.mainRegion.show(
             new LayoutView()
            );
       }
    });
});