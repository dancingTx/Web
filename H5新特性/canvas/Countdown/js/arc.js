window.onload = function(){
  var canvas = document.getElementById("canvas");
  canvas.width = 800;
  canvas.height = 600;
  var ctx = canvas.getContext("2d");
  ctx.lineWidth = 2;

  for(var i=0;i<10;i++){
    ctx.beginPath();
   ctx.arc(50+i*50,100,20,0,2*Math.PI*(i+1)/10);

   ctx.fillStyle = 'red';
   ctx.strokeStyle = 'black';
   ctx.fill();
   ctx.stroke();
   }

}
