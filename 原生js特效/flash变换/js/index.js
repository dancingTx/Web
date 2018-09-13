window.onload = function() {
  //左右按钮
  var oDiv = document.getElementById("playimages");
  var oBtnPrev = getByClass(oDiv, "prev")[0];
  var oBtnNext = getByClass(oDiv, "next")[0];
  var oBtnMarkLeft = getByClass(oDiv, "mark_left")[0];
  var oBtnMarkRight = getByClass(oDiv, "mark_right")[0];
  //大图切换
  var oSmallPic = getByClass(oDiv, "small_pic")[0];
  var oBigPic = getByClass(oDiv, "big_pic")[0];
  var oLiBig = oBigPic.getElementsByTagName("li");
  var oLiSmall = oSmallPic.getElementsByTagName("li");
  var nowZIndex = 2;
  var now = 0;
  //小图淡入淡出

  //小图轮播
  var aUlSmall = oSmallPic.getElementsByTagName("ul")[0];
  aUlSmall.style.width = oLiSmall[0].offsetWidth * oLiSmall.length + "px";
  //点击换图

  //获取说明
  var oTxt = getByClass(oDiv, "text")[0];
  var oLength = getByClass(oDiv,"length")[0];
  //左右按钮
  oBtnPrev.onmouseover = oBtnMarkLeft.onmouseover = function() {
    startMove(oBtnPrev, "opacity", 100);
  };
  oBtnPrev.onmouseout = oBtnMarkLeft.onmouseout = function() {
    startMove(oBtnPrev, "opacity", 0);
  };
  oBtnNext.onmouseover = oBtnMarkRight.onmouseover = function() {
    startMove(oBtnNext, "opacity", 100);
  };
  oBtnNext.onmouseout = oBtnMarkRight.onmouseout = function() {
    startMove(oBtnNext, "opacity", 0);
  };
  //大图切换
  function tab() {
    oLiBig[now].style.zIndex = nowZIndex++;
    for (var i = 0; i < oLiSmall.length; i++) {
      startMove(oLiSmall[i], "opacity", 30);
    }
    startMove(oLiSmall[now], "opacity", 100);
    oLiBig[now].style.height = 0;
    startMove(oLiBig[now], "height", 320);
    if (now == 0) {
      startMove(aUlSmall, "left", 0);
    } else if (now == oLiSmall.length - 1) {
      startMove(aUlSmall, "left", -(now - 2) * oLiSmall[0].offsetWidth);
    } else {
      startMove(aUlSmall, "left", -(now - 1) * oLiSmall[0].offsetWidth);
    }
  }

  for (var i = 0; i < oLiSmall.length; i++) {
    oLiSmall[i].index = i;
    oLiSmall[i].onclick = function() {
      if (now == this.index) return;
      now = this.index;
      tab();
    };
    //小图淡入淡出
    oLiSmall[i].onmouseover = function() {
      startMove(this, "opacity", 100);
    };
    oLiSmall[i].onmouseout = function() {
      if (this.index != now) {
        startMove(this, "opacity", 30);
      }
    };
  }
  //小图轮播

  //点击换图

  //获取图片说明
    var Texts = [
      "完美世界",
      "跨服争霸战",
      "完美",
      "飞屋环游记",
      "功夫熊猫",
      "熊二",
      "车"
    ];
  oBtnNext.onclick = function() {
	now++;
	//添加图片说明
	//添加数字
	if(now == 7){
	oTxt.innerHTML = Texts[0];
	oLength.innerHTML = `第1张图片`;
	}else{
	oTxt.innerHTML = Texts[now];
	oLength.innerHTML = `第${now + 1}张图片`;
	}
    if (now == oLiBig.length) {
      now = 0;
    }
    tab();
  };
  oBtnPrev.onclick = function() {
    now--;
    if (now == -1) {
      //取得是长度
      now = oLiBig.length - 1; //取得是数
    }
    tab();
  };
  var timer = setInterval(oBtnNext.onclick, 2000);
  oBigPic.onmouseover = function() {
    clearInterval(timer);
  };
  oBigPic.onmouseout = function() {
    timer = setInterval(oBtnNext.onclick, 2000);
  };
};
