/* 
 * Teet View
 */
 define(["underscore","backbone","models/tweet"],
    function(_, Backbone, tweetList) {
  
        var tweetView = Backbone.View.extend({

            tagName: "li",

            template: _.template($('#tweetTemplate').html()),

            initialize: function() {
                this.model.bind('change', this.render, this);
                this.render();
            },
            render: function() {               
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });
        return twittView;
});


