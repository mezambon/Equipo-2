require.config({
        paths : {
            underscore : 'js/underscore',
            backbone : 'js/backbone',
            jquery : 'js/jquery-jqmobile'
        }
});

require([
    'Modules/Tweet',
    'Modules/User',
    'underscore',
    'backbone',
    'jquery'
    ],
    function(Tweet,User){
        $("#loginBtt").click(function(){   
            var param=$("#userID").val();
            $("#errorMsg").html(param);                
        });
        userOne = new User();
        userOne.signIn();
    
});

$("#loginBtn").click(function(event){
    event.preventDefault();
                $.ajax({
                    type:'POST',
                    url: "http://g2.bootcamp.dev.globant.com/api/service/RequestToken.php",
                    data: {oauth_callback: 'http://g2.bootcamp.dev.globant.com/'}
                    })    
}) 