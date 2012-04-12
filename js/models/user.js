define(["underscore", "backbone"],
    function(_, Backbone){
        var User = Backbone.Model.extend({
            defaults: function(){
                return{
                    username: 'juan',
                    password: 'juan',
                    connection: null
                };
            },
            initialize: function(){
               if(!this.get("username")){
                   this.set({"username": this.defaults.username});
               }
               if(!this.get("password")){
                   this.set({"password": this.defaults.password});
               }
               if(!this.get("connection")){
                   this.set({"connection": this.defaults.connection});
               }
            },
            clear: function(){
                this.destroy();
            },
            signIn: function(){
                $.ajax({
                    type:'POST',
                    url: "http://g2.bootcamp.dev.globant.com/api/service/RequestToken.php",
                    data: {oauth_callback: 'http://g2.bootcamp.dev.globant.com/'}
                    })   
            }
            
        })
        return User;
});

//Backbone.Model.prototype.signin=function(){
//    //document.bgColor = 'red';
//    
//} 

        


