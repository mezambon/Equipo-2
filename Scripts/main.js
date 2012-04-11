require.config({
        paths : {
            jquery : 'js/jquery-jqmobile',
            underscore : 'js/underscore',
            backbone : 'js/backbone'            
        }
});

require([
    'Modules/user',
    'jquery',
    'underscore',
    'backbone'
    ],
    function(user){
        $("#loginBtn").click(function(){   
            var param=$("#userID").val();
            $("#errorMsg").html(param);                
        }); 
});