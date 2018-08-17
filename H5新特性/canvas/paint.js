window.onload = function() {
//   var canvas = document.getElementById('canvas');
//   var ctx = canvas.getContext('2d');
//         let lastX ,lastY;
//   canvas.onmousedowm = function(ev) {
// console.log("进来了");
//           lastX = ev.pageX;
//           lastY = ev.pageY;
//     canvas.onmousemove = function(ev) {
//         ctx.moveTo(lastX, lastY);
//       ctx.lineTo(ev.pageX, ev.pageY);
//
//
//       lastX = ev.pageX;
//       lastY = ev.pageY;
//         console.log("我开始画了");
//       ctx.stroke();
//     }
//     canvas.onmouseup = function() {
//       canvas.onmousemove = null;
//       canvas.onmouseup = null;
//     }
//   }
let can = document.getElementById('canvas');
let ctx = can.getContext('2d');
      let Ocolor = document.getElementById('color');
let lastX, lastY;
let color = 'black';
can.onmousedown = function(ev) {
   Ocolor.onchange = function(){
     color = this.value;
   }
  lastX = ev.offsetX;
  lastY = ev.offsetY;
  can.onmousemove = function(ev) {
        ctx.beginPath();


    ctx.moveTo(lastX, lastY);
    ctx.lineTo(ev.offsetX, ev.offsetY);
    lastX = ev.offsetX;
    lastY = ev.offsetY;
    ctx.strokeStyle = color;
    console.log("我开始花了");
    ctx.stroke();
  };
  can.onmouseup = function() {
    can.onmousemove = null;
    can.onmouseup = null;
  };
};

}
