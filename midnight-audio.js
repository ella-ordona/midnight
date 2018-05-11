$(document).ready (function(){


    var audio = document.getElementById("midnight-audio");

    $("button").click(function() {
        var buttonText = $(this).text;
        
        $(this).text(function(i, text){
            return text === "SOUND ON" ? "SOUND OFF" : "SOUND ON";
        })
        
        audio.paused ? audio.play() : audio.pause()
    })
    
});
    

    
