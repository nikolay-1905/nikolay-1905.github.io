function onYouTubeIframeAPIReady(){
    player=new YT.Player("ytplayer",{width:"560",videoId:"-OsIBsLtnJo",playerVars:{
        controls:0,disablekb:0,loop:1,modestbranding:1,rel:0,fs:0,showinfo:0,autoplay:1,playlist:"-OsIBsLtnJo",mute:1
    },events:
    {onReady:function(e){setTimeout(onPlayerReady,2e3)}}})}function onPlayerReady(e){$(".up_sound,#volume_up").on("click",(function(){player.unMute(),$(".up_sound,#volume_up").fadeOut(500),console.log("volume_up")}))}if(setTimeout((function(){$(".up_sound,#volume_up").fadeIn(500)}),5e3),!window.YT)var YT={loading:0,loaded:0};if(!window.YTConfig)var YTConfig={host:"http://www.youtube.com"};YT.loading||(YT.loading=1,function(){var e=[];YT.ready=function(o){YT.loaded?o():e.push(o)},window.onYTReady=function(){YT.loaded=1;for(var o=0;o<e.length;o++)try{e[o]()}catch(e){}},YT.setConfig=function(e){for(var o in e)e.hasOwnProperty(o)&&(YTConfig[o]=e[o])};var o=document.createElement("script");o.type="text/javascript",o.id="www-widgetapi-script",o.src="https://s.ytimg.com/yts/jsbin/www-widgetapi-vflN2g023/www-widgetapi.js",o.async=!0;var t=document.currentScript;if(t){var n=t.nonce||t.getAttribute("nonce");n&&o.setAttribute("nonce",n)}var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)}()),device.mobile()||device.ipad()||device.android()?($("#ytplayer").append('<img src="images/preloader_Youtube.gif" id="apYou">'),$(".hover-modal").remove(),$(".anticlicker").css("bottom","62%"),setTimeout((function(){
        $("#apYou").hide(),$("#ytplayer").append('<iframe width="560" src="https://www.youtube.com/embed/-OsIBsLtnJo?mute=0&amp;autoplay=1&amp;controls=1&amp;disablekb=0&amp;loop=1&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;playlist=-OsIBsLtnJo" frameborder="0" allowfullscreen=""></iframe>')}),2e3)):$("body").append('<script src="js/youtubeUP.js"><\/script>');
                                                    // Сылка на ютуб видео 