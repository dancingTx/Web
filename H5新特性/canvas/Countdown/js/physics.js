var ball = {
  x: 512,
  y: 100,
  r: 9,
  g: 2,
  vx: -4,
  vy: 0,
  color: "blue"
}
var WINDOW_HEIGHT = 600;
var WINDOW_WIDTH = 800;
window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  setInterval(function() {
    render(ctx);
    update();
  }, 50);
}
function update() {
  ball.x += ball.vx;
  ball.y += ball.vy;
  ball.vy += ball.g;
  if(ball.y >= canvas.height-ball.r){
    ball.y =canvas.height-ball.r;
    ball.vy = -ball.vy*0.7;


  }

};
function render(context) {
  context.clearRect(0, 0,context.canvas.width, context.canvas.height);
  context.fillStyle =ball.color;
  context.beginPath();
  context.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  context.closePath();
  context.fill();
}
