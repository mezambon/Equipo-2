/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(["underscore", "backbone"],
    function(_, Backbone){
        var User= Backbone.Model.extend({
            defaults: function(){
                return{
                    username: '',
                    password: '',
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
            }
            
        })
        return User;
});

    /*user.prototype.login=function(userid, userpws){
        this.setUsername(userid);
        this.setPassword(userpws);
        console.log(this.getUsername()+" "+this.getPassword());
        //establecer connection
     }*/
        


