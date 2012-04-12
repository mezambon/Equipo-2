
define(['underscore', 'backbone'],
    function(_, backbone){
        var appRouter = backbone.Router.extend({
            routes: {
                ''         : 'index',
                'dashboard': 'dashboard'
                
            },
            index: function(){
                //verifica si el usuario de twitter ya esta registrado lo redirige al dashboard
                url = "/../api/service/UserCredentials.php";
                $.getJSON(url,function(json){
                if (json.user_id)
                    $(location).attr('href',"#dashboard");
                else
                    $(location).attr('href',"#homepage");
                });
            },
            dashboard: function(){
                alert("dashboard");
            }
            
        })
    return appRouter;
        
    
});

