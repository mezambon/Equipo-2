require.config({
        paths : {
            jquery : 'lib/jquery-jqmobile',
            underscore : 'lib/underscore',
            backbone : 'lib/backbone'
                      
        }
});

require(["jquery","underscore", "backbone", "models/user", "routers/appRouter"],
    function(jquery, underscore, backbone, user, appRouter){
         
        router = new appRouter();
        backbone.history.start();
        
});
