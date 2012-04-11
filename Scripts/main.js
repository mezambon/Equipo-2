require.config({
        paths : {
            user : 'Modules/user',
            jquery : 'js/jquery-jqmobile',
            underscore : 'js/underscore',
            backbone : 'js/backbone'            
        }
});

require([
    'user',
    'jquery',
    'underscore',
    'backbone'
    ],
    function(user){
        $("#loginBtn").click(function(){   
            var param=$("#userID").val();
            $("#errorMsg").html(param);                
            userOne = new User();
            userOne.signIn();    
        });
//        $("#loginBtn").click(function(event){
//            event.preventDefault();
//            $.ajax({
//                type:'POST',
//                url: "http://g2.bootcamp.dev.globant.com/api/service/RequestToken.php",
//                data: {oauth_callback: 'http://g2.bootcamp.dev.globant.com/'}
//            });    
//        });
});
