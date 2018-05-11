$(document).ready (function(){
    var rotate = 17;
    var pageX = $(document).width();
    var pageY = $(document).height();
    var mouseY=0;
    var mouseX=0;

    if ($(window).width() > 1024) {
        
        $(document).mousemove(function( event ) {
        mouseX = event.pageY;
        mouseY = event.pageX;
        rotateY = -(pageY/2-mouseY)/pageY*rotate;
        rotateX = (pageX/2-mouseX)/pageX*rotate;
        $(".gif").css({ '-webkit-transform' : 'translateX(-50%) translateY(-50%) scale(1) perspective( 1960px ) rotateY('+rotateY+'deg) rotateX('+rotateX+'deg)'});
      })}
    
});