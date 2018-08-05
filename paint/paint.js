window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  //var oBtn = document.getElementById("btn");
  //var oImg = document.getElementById("img1");

  let oImg = new Image();
  oImg.src = "img/paint.jpg";
  //ctx.drawImage(oImg,0,0);
  //var imgdata = ctx.createImgData(0,0,canvas.width,canvas.height);
  oImg.onload = function() {
    ctx.drawImage(oImg, 0, 0);
    var imgdata = ctx.getImageData(0, 0, canvas.width, canvas.height);
    // alert(
    //   `
    //     'r:'${imgdata.data[0]},
    //     'g:'${imgdata.data[1]},
    //     'b:'${imgdata.data[2]},
    //     'a':${imgdata.data[3]}
    //   `
    // );

    // alert(imgdata.data[0]);
    // alert(imgdata.data[1]);
    // alert(imgdata.data[2]);
    btn1.onclick = function() {
      var imgdata = ctx.getImageData(0, 0, oC.width, oC.height);
      for (var i = 0; i < oC.height; i++) {
        for (var j = 0; j < oC.width; j++) {
          var avg = (imgdata.data[(i * oC.width + j) * 4] + imgdata.data[(i * oC.width + j) * 4 + 1] + imgdata.data[(i * oC.width + j) * 4 + 2]) / 3;
          imgdata.data[(i * oC.width + j) * 4] = imgdata.data[(i * oC.width + j) * 4 + 1] = imgdata.data[(i * oC.width + j) * 4 + 2] = avg;

        }
      }
      ctx.putImageData(imgdata, 0, 0);
    }
  btn2.onclick = function(){
    ctx.drawImage(oImg,0,0);

  }

    ctx.putImageData(imgdata, 0, 0);

  }

}
