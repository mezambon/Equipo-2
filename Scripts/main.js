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
    
});