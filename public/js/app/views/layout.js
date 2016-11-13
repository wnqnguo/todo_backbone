define(['jquery', './TodoCollectionView','./FormView','../models/todo','hbs!../templates/layout','backbone', 'marionette'],
    function ($, ListView, FormView, ToDoModel,template, Backbone) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.View.extend({
            template:template,
             regions: {
				form: '.form',
				list: '.list'
			},

			collectionEvents: {
				add: 'itemAdded'
			},
            render:function(){
				this.$el.html("Hello World");
				return this;
            },
			onRender: function() {
				console.log("in layout called on render");
				var formView = new FormView({model: this.model});
				var listView = new ListView({collection: this.collection});
				this.showChildView('form', new FormView());
				this.showChildView('list', new LayoutView());
			},

			onChildviewAddTodoItem: function(child) {
				this.model.set({
					assignee: child.ui.assignee.val(),
					text: child.ui.text.val()
				}, {validate: true});

				var items = this.model.pick('assignee', 'text');
			},

			itemAdded: function() {
				this.model.set({
					assignee: '',
					text: ''
				});
			}
        });
    });