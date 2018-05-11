$(document).ready (function() {
    
    var contTime = setInterval(calcTime, 1000)
    
    function calcTime() {
        var d = new Date();
        var philTime = "Asia/Manila";
        var finalTime= moment(d).tz(philTime).format("HH:mm");
        
        document.getElementById("clock").innerHTML=finalTime + " PHT";
    }
    
    
    
});