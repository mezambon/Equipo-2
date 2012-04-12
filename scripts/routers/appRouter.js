
define(['underscore', 'backbone'],
    function(_, backbone){
        var appRouter = backbone.Router.extend({
            routes: {
                ''         : 'index',
                'dashboard': 'dashboard'
                
            },
            index: function(){
                alert("index");
            },
            dashboard: function(){
                alert("dashboard");
            }
            
        })
    return appRouter;
        
    
});

