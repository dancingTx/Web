window.onload = function() {
  var oC = document.getElementById('canvas');
  var ctx = oC.getContext('2d');
  var oImg = new Image();
  //var oImg1 = new Image();
  oImg.src = "img/sprint.jpg";
  //oImg1.src = "img/jewer.jpg";


  oImg.onload = function() {

    //ctx.drawImage(oImg,
    //第一帧：sx：101，sy：33,sw:23,sh:33
    // sx,sy,sw,sh,
    // dx,dy,dw,dh,
    // 101,33,23,33,
    // 100,100,50,60
    /*第一帧：sx：101+31
            第二帧：sx：132+31
            第三帧：sx：163*/

    //  );

    var i = 0;
    var dir = 'r';
    var x = 100,
      y = 100;
    var speed = 5;
    document.onkeydown = function(ev) {

      var keys = {
        37: 'l',
        38: 'u',
        39: 'r',
        40: 'd'
      }
      dir = keys[ev.keyCode] || dir;
    }

    setInterval(function() {
      ctx.clearRect(0, 0, oC.width, oC.height);
      var rows = {
        'd': 0,
        'l': 1,
        'r': 2,
        'u': 3
      };
      ctx.drawImage(oImg, 100 + 32 * i, 32 * rows[dir], 24, 31, x, y, 20, 40);
      
      i++;
      if (i === 3) {
        i = 0;
      };
      switch (dir) {
        case 'l':
          x -= speed;
          if (x == 50) {
            x += speed;
          }
          break;
        case 'r':
          x += speed;
          if (x == 150) {
            x -= speed;
          }
          break;
        case 'u':
          y -= speed;
          if (y == 50) {
            y += speed;
          }
          break;
        case 'd':
          y += speed;
          if (y == 150) {
            y -= speed;
          }
          break;
        default:

      }

    }, 200);

  }
}
