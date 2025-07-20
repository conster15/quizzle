/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


window.onload = function(){
 //select item
  var puzzley = document.getElementById("gif");
  
  //listen to touchmove, grab location assign to gif
  puzzley.addEventListener("touchmove", function(ev){
    
    var touchLocation = ev.targetTouches[0];
    
    puzzley.style.left = touchLocation.pageX + "px";
    puzzley.style.top = touchLocation.pageY + "px";
  });
  
puzzley.addEventListener("touchend", function(ev) {
        //current  position when dropped
        var x = parseInt(puzzley.style.left);
        var y = parseInt(puzzley.style.top);
        //check to see if that position meets our constraints
        if (x < 388 || x > 646) {
            puzzley.style.left = "10px";
            puzzley.style.top = "10px";
        }
        if (y < 100 || y > 356) {
            puzzley.style.left = "10px";
            puzzley.style.top = "10px";
        }
    })
}

 
