require.config({
        paths : {
            jquery : 'lib/jquery-jqmobile',
            underscore : 'lib/underscore',
            backbone : 'lib/backbone'
                      
        }
});

require(["jquery","order!underscore", "order!backbone", "models/user"],
    function(jquery, underscore, backbone, user){
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
