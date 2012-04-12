require.config({
        paths : {
            jquery : 'lib/jquery-jqmobile',
            underscore : 'lib/underscore',
            backbone : 'lib/backbone'
                      
        }
});

require(["jquery","underscore", "backbone", "models/user", "routers/appRouter"],
    function(jquery, underscore, backbone, user, appRouter){
       /* $("#loginBtn").click(function(){
            
            var param=$("#userID").val();
            $("#errorMsg").html(param);                
               
        });*/
       /* $("#loginBtn").click(function(event){
            console.log("hola");
            event.preventDefault();
            $.ajax({
                type:'POST',
                
                url: "api/lib/twitteroauth/twitteroauth.php",               
                data: {service:'requestTokenURL'}, //params:{}},
                oauth_callback: 'http://g2.bootcamp.dev.globant.com'
            });    
        });*/
        router = new appRouter();
        backbone.history.start();
});
