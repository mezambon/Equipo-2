/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
define(function(){
    function user(){
            var username;
            var password;
            var connection;
            
            this.setUsername=function(u){this.username=u};
            this.setPassword=function(p){this.password=p};
            this.getUsername=function(){return username};
            this.getPassword=function(){return password};       
    }
    user.prototype.login=function(){
        //setear username y passwoerd
        //establecer connection
     }
})
        


