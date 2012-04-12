define([
    
    
], 
function(){
    LogInView = Backbone.View.extend({
        el: $("#pageLogin"),
        events:{
            "click #loginBtn": "LogIn"
        },
        initialize: function(){
            this.model= new User();
        },
        render: function(){
            
        },
        LogIn : function(){
            
        }
    });
    
    
});

    



