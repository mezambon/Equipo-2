require.config({
        paths : {
            jquery : 'jquery',
            jqueryMob : 'lib/jquery-jqmobile',
            underscore : 'lib/underscore',
            backbone : 'lib/backbone'
                      
        }
});

require(["order!jquery","order!jqueryMob","order!underscore", "order!backbone", "models/user"],
    function(jquery, jqueryMob, underscore, backbone, user){
       /* $("#loginBtn").click(function(){
            
            var param=$("#userID").val();
            $("#errorMsg").html(param);                
               
        });*/
        $("#loginBtn").click(function(event){
            console.log("hola");
            event.preventDefault();
            $.ajax({
                type:'POST',
                url: "http://g2.bootcamp.dev.globant.com/api/service/RequestToken.php",               
                data: {oauth_callback: 'http://g2.bootcamp.dev.globant.com/'}
            });    
        });
});
