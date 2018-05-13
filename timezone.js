$(document).ready (function() {
    
    let contTime = setInterval(calcTime, 1000)
    
    function calcTime() {
        let d = new Date();
        let philTime = "Asia/Manila";
        let finalTimePH = moment(d).tz(philTime).format("HH:mm");        
        
        document.getElementById("clock").innerHTML=finalTimePH + " PHT";
    }
    
    $(".about").on("click", function( ) {
        $(".overlay").toggleClass("opacity-toggle");
        a.stopPropagation();

    });
    
    
    
    
    
});