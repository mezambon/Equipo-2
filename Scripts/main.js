require.config({
        paths : {
            underscore : 'js/underscore',
            backbone : 'js/backbone',
            jquery : 'js/jquery-jqmobile'
        }
});

require([
    'Modules/tweet',
    'Modules/user',
    'underscore',
    'backbone',
    'jquery'
    ],
    function(tweet,user){
        $("#loginBtt").click(function(){   
            var param=$("#userID").val();
            $("#errorMsg").html(param);                
        }); 
    
});