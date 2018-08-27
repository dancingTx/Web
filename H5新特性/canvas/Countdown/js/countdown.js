var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;
var WINDOW_WIDTH = 1024;
var WINDOW_HEIGHT = 768;
var endTime = new Date();
// endTime.setTime(endTime.getTime() + 3600 * 1000);
// var curShowTimeSeconds = 0;
var balls = [];
const colors = [
  "#33B5E5",
  "#0099CC",
  "#AA66CC",
  "#9933CC",
  "#99CC00",
  "#669900",
  "#FFBB33",
  "#FF8800",
  "#FF4444",
  "#CC0000"
];
window.onload = function() {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  //关于屏幕自适应，时钟只出现一半的情况
  //..1.修改js，将document.body.clientWidth=>document.documentElement.clientWidth;
  //..           document.body.clientHeight=>document.documentElement.clientHeight;
  //..2.修改css，在style中，修改为html,body{margin:0,height:100%;}
  WINDOW_WIDTH = document.documentElement.clientWidth;
  WINDOW_HEIGHT = document.documentElement.clientHeight;
  MARGIN_LEFT = Math.round(WINDOW_WIDTH / 10); //相当于给两侧留出五分之一的距离，中间的数字占五分之四
  RADIUS = Math.round((WINDOW_WIDTH * 4) / 5 / 108) - 1;
  MARGIN_TOP = Math.round(WINDOW_HEIGHT / 5);
  canvas.width = WINDOW_WIDTH;
  canvas.height = WINDOW_HEIGHT;
  //canvas start
  curShowTimeSeconds = getCurrentShowTimeSeconds();
  setInterval(function() {
    render(ctx);
    update();
  }, 50);
};
function update() {
  var nextShowTimeSeconds = getCurrentShowTimeSeconds();
  var nextHours = parseInt(nextShowTimeSeconds / 3600),
    nextMinutes = parseInt((nextShowTimeSeconds - nextHours * 3600) / 60),
    nextSeconds = nextShowTimeSeconds % 60;
  var curHours = parseInt(curShowTimeSeconds / 3600),
    curMinutes = parseInt((curShowTimeSeconds - curHours * 3600) / 60),
    curSeconds = curShowTimeSeconds % 60;
  if (nextSeconds != curSeconds) {
    // hours
    if (parseInt(curHours / 10) != parseInt(nextHours / 10)) {
      addBalls(MARGIN_LEFT, MARGIN_TOP, parseInt(curHours / 10));
    }
    if (curHours % 10 != nextHours % 10) {
      addBalls(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, curHours % 10);
    }
    //minutes
    if (parseInt(curMinutes / 10) != parseInt(nextMinutes / 10)) {
      addBalls(
        MARGIN_LEFT + 39 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt(curMinutes / 10)
      );
    }
    if (parseInt(curMinutes % 10) != parseInt(nextMinutes % 10)) {
      addBalls(MARGIN_LEFT + 54 * (RADIUS + 1), MARGIN_TOP, curMinutes % 10);
    }
    //seconds
    if (parseInt(curSeconds / 10) != parseInt(nextSeconds / 10)) {
      addBalls(
        MARGIN_LEFT + 78 * (RADIUS + 1),
        MARGIN_TOP,
        parseInt(curSeconds / 10)
      );
    }
    if (curSeconds % 10 != nextSeconds % 10) {
      addBalls(MARGIN_LEFT + 93 * (RADIUS + 1), MARGIN_TOP, curSeconds % 10);
    }
    curShowTimeSeconds = nextShowTimeSeconds;
  }
  updateBall();
  console.log(balls.length);
}

function updateBall() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].x += balls[i].vx;
    balls[i].y += balls[i].vy;
    balls[i].vy += balls[i].g;
    if (balls[i].y >= WINDOW_HEIGHT - RADIUS) {
      balls[i].y = WINDOW_HEIGHT - RADIUS;
      balls[i].vy = -balls[i].vy * 0.75;
    }
  }
  var count = 0;
  for (var i = 0; i < balls.length; i++) {
    if (balls[i].x + RADIUS > 0 && balls[i].x - RADIUS < WINDOW_WIDTH) {
      balls[count++] = balls[i];
    }
  }
  while (balls.length > Math.min(300,count)) {
    //Math.min(300,count)=>意味着当小球的count在三百以内时，选择count，当count>300,选取300
    //也就是说，当计算机的性能较低时，将小球的数量控制在三百以内。
    balls.pop();
  }
}
function addBalls(x, y, num) {
  for (var i = 0; i < digit[num].length; i++) {
    for (var j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        var aBall = {
          x: x + 2 * (1 + RADIUS) * j + (1 + RADIUS),
          y: y + 2 * (1 + RADIUS) * i + (1 + RADIUS),
          r: RADIUS,
          g: 1.5 + Math.random(),
          vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 3,
           //vy: -(Math.pow(-1, Math.ceil(Math.random() * 1000)) * 5),
           vy: -5,
          //  g:2,
          //  vx:-4,
          //  vy:2,
          color: colors[Math.floor(Math.random() * colors.length)]
        };
        balls.push(aBall);
        // console.log(balls.length);
      }
    }
  }
}
function getCurrentShowTimeSeconds() {
  console.log("a");
  // var curTime = new Date();
  //  var ret = endTime.getTime() - curTime.getTime();
  //  ret = Math.round(ret / 1000);
  //  return ret > 0 ? ret : 0;
  // var ret = curTime.getTime();
  //  ret = Math.round(ret/1000);
  //  return ret ;
   var curTime = new Date();
   var ret = curTime.getHours()*3600+curTime.getMinutes()*60+curTime.getSeconds();
   return ret ;
}

function render(context) {
  // var curTime = new Date();
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  var hours = parseInt(curShowTimeSeconds / 3600),
    minutes = parseInt((curShowTimeSeconds - hours * 3600) / 60),
    seconds = curShowTimeSeconds % 60;

  //hours
  renderDigit(MARGIN_LEFT, MARGIN_TOP, parseInt(hours / 10), context);
  renderDigit(MARGIN_LEFT + 15 * (RADIUS + 1), MARGIN_TOP, hours % 10, context);
  // renderDigit(MARGIN_LEFT+2*15*(RADIUS+1),MARGIN_TOP,10,context);
  //冒号 ：
  renderDigit(MARGIN_LEFT + 30 * (RADIUS + 1), MARGIN_TOP, 10, context);
  //minute
  renderDigit(
    MARGIN_LEFT + 39 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt(minutes / 10),
    context
  );
  renderDigit(
    MARGIN_LEFT + 54 * (RADIUS + 1),
    MARGIN_TOP,
    minutes % 10,
    context
  );
  //冒号 ：
  renderDigit(MARGIN_LEFT + 69 * (RADIUS + 1), MARGIN_TOP, 10, context);
  //seconds
  renderDigit(
    MARGIN_LEFT + 78 * (RADIUS + 1),
    MARGIN_TOP,
    parseInt(seconds / 10),
    context
  );
  renderDigit(
    MARGIN_LEFT + 93 * (RADIUS + 1),
    MARGIN_TOP,
    seconds % 10,
    context
  );
  for (var i = 0; i < balls.length; i++) {
    context.beginPath();
    context.fillStyle = balls[i].color;
    context.arc(balls[i].x, balls[i].y, balls[i].r, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
  }
}

function renderDigit(x, y, num, context) {
  context.fillStyle = "rgb(0,102,153)";
  for (var i = 0; i < digit[num].length; i++) {
    for (var j = 0; j < digit[num][i].length; j++) {
      if (digit[num][i][j] == 1) {
        context.beginPath();
        context.arc(
          //  x+2*(1+r)*j+(1+r);
          //  y+2*(1+r)*i+(1+r);
          x + 2 * (1 + RADIUS) * j + (1 + RADIUS),
          y + 2 * (1 + RADIUS) * i + (1 + RADIUS),
          RADIUS,
          0,
          2 * Math.PI
        );

        context.closePath();
        context.fill();
      }
    }
  }
}
