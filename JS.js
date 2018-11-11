x = 180  
y = 130   
r = 100   
a = 0    

var running = false;


function rotate(a) {
  
  var px = x + r * Math.cos(a); 
  var py = y + r * Math.sin(a);
  
  document.querySelector('#smallCircle').style.left = px + "px";
  document.querySelector('#smallCircle').style.top = py + "px";  
  
}



var interval= setInterval(function() {
  a = (a + Math.PI / 360) % (Math.PI * 2);
  rotate(a);
}, 5);


let Start = document.getElementById("Start");
let Stop = document.getElementById("Stop");



Start. addEventListener("click", function () {
    
    Start.running = true;
    Stop.disabled = false;
});

Stop.addEventListener("click",function(){
 
Start.running=false;
Start.running=true;
}
);