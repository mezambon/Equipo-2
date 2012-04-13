define(['underscore', 'backbone'],
    function(_, backbone){
        var tweet = backbone.Model.extend({
            defaults: function(){
                return{
                    poster: 'twitter user',
                    date: '',
                    hour: '',
                    min: '',
                    content: 'This is the content of the tweet',
                    length: 0
                };
            },
            initialize: function(){
               var currentTime = new Date ();
               if(!this.get("poster")){
                   this.set({"poster": this.defaults.poster});
               }
               if(!this.get("date")){
                   this.set({"date": currentTime.getUTCDate()});
               }
               if(!this.get("hour")){
                   this.set({"hour": currentTime.getHours()});
               }
               if(!this.get("min")){
                   this.set({"min": currentTime.getMinutes()});
               }
               if(!this.get("length")){
                   this.set({"length": this.defaults.length});
               }
               if(!this.get("content")){
                   this.set({"content": this.defaults.content});
               }
            },
            clear: function(){
                this.destroy();
            }            
        })
        //Coleccion del modelo--->supongo que cada usuario tiene una coleccion de tweet`s
        var tweetList = Backbone.Collection.extend({
        model: tweet
        });
        return tweetList;
});
//-------Fin model

 

