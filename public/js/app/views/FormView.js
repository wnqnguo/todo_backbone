define(['jquery', 'hbs!templates/form', 'backbone', 'marionette'],
    function ($, template, Backbone) {
    var formView = Backbone.Marionette.View.extend({
      tagName:'form',
      template:template,
      triggers:{
        submit: 'add:todo:item'
      },
      modelEvents: {
        change: 'render'
      },
      ui: {
        assignee: '#id_assignee',
        text: '#id_text'
      }
});
    return formView;
  });