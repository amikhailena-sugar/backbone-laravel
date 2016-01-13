runApp.class_method({test_events:function(){Backbone.Events.once("custom-book-inited",function(e){console.log("MSG:"+e)});var e=_.extend({},Backbone.Events),t=_.extend({},Backbone.Events);e.on("event1",function(){console.log("I am event1")}),e.once("event2",function(){console.log("I am event2")}),e.listenTo(t,"event3",function(){console.log("I am event3")}),e.trigger("event1"),e.trigger("event2"),e.trigger("event2"),t.trigger("event3"),e.stopListening(t),t.trigger("event3"),e.off(),e.trigger("event1")}}),runApp.class_method({test_model:function(){function e(e){var t=Backbone.Model.extend({urlRoot:"/api/v1/books",initialize:function(){Backbone.Events.trigger("custom-book-inited","I have been initialized!")}}),n=new t({title:"Adventures of Huckleberry Finn",author:"Mark Twain",language:"English"});return n.set("publication_date","1884-12-10"),n.save(void 0,{success:function(e,t){t=t||{},e.set("id",t.id),console.log(e),e.destroy()}}),n}var t,n=!1;return function(){return n?t:(t=e(),n=!0,t)}}()}),runApp.class_method({test_collection:function(){function e(){var e=Backbone.Collection.extend({url:"/api/v1/books"}),t=new e;t.fetch({async:!1}),console.log(t.toJSON());var n=t.create({title:"Tom Sawyer Abroad",author:"Twain",language:"English",publication_date:"1894-01-01"},{async:!1,success:function(e,t){t=t||{},e.set("id",t.id)}});return n.save({author:"Mark Twain"},{async:!1}),n.fetch({async:!1,success:function(e){console.log(e.toJSON())}}),n.destroy(),t}var t,n=!1;return function(){return n?t:(t=e(),n=!0,t)}}()}),runApp.class_method({app_routes:function(){var e=Backbone.Router.extend({routes:{test:"testRoute","test/:param":"testRoute"},testRoute:function(e){null===e?console.log("Routing without parameters"):console.log("Routing with parameter - "+e)}}),t=new e;return Backbone.history.start(),t}()}),runApp.class_method({test_view:function(){var e=Backbone.View.extend({options:{title:"Test"},initialize:function(){this.render()},render:function(){var e=_.template('<button type="button" class="btn btn-lg btn-default"><%= title %></button>');this.$el.html(e(this.options))},events:{"click .btn":"runTest"},runTest:function(){console.log("Test has been runned!")}});return new e({el:$("#container")})}});