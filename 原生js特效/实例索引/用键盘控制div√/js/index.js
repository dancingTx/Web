var iSpeed = 6;
window.onload = function() {
  var oBox = document.getElementById("box");
  var left = (right = up = down = false);
  setInterval(function() {
    if (up) {
      oBox.style.top = oBox.offsetTop - iSpeed + "px";
    } else if (down) {
      oBox.style.top = oBox.offsetTop + iSpeed + "px";
    } else if (left) {
      oBox.style.left = oBox.offsetLeft - iSpeed + "px";
    } else if (right) {
      oBox.style.left = oBox.offsetLeft + iSpeed + "px";
    }
    limit();
  }, 30);

  //键盘按下，为true
  document.onkeydown = function(ev) {
    var oEvent = ev || event;
    var keyCode = oEvent.keyCode;
    switch (keyCode) {
      case 38:
      case 87:
        if (oEvent.ctrlKey) {
          var oldWidth = oBox.offsetWidth;
          var oldHeight = oBox.offsetHeight;
          oBox.style.width = oBox.offsetWidth * 1.2 + "px";
          oBox.style.height = oBox.offsetHeight * 1.2 + "px";
          //为了在原点向四周扩散
          oBox.style.left =
            oBox.offsetLeft - (oBox.offsetWidth - oldWidth) / 2 + "px";
          oBox.style.top =
            oBox.offsetTop - (oBox.offsetHeight - oldHeight) / 2 + "px";
          break;
        }
        up = true;
        break;
      case 40:
      case 83:
        if (oEvent.ctrlKey) {
          var oldWidth = oBox.offsetWidth;
          var oldHeight = oBox.offsetHeight;
          oBox.style.width =  oBox.offsetWidth * 0.8 + "px";
          oBox.style.height = oBox.offsetHeight * 0.8 + "px";
            //在原位置缩小
          oBox.style.left =
            oBox.offsetLeft - (oBox.offsetWidth - oldWidth) / 2 + "px";
          oBox.style.top =
            oBox.offsetTop - (oBox.offsetHeight - oldHeight) / 2 + "px";
          break;
        }
        down = true;
        break;
      case 37:
      case 65:
        left = true;
        break;
      case 39:
      case 68:
        right = true;
        break;
      case 49:
      case 97:
        oEvent.ctrlKey && (oBox.style.background = "#008000");
        break;
      case 50:
      case 98:
        oEvent.ctrlKey && (oBox.style.background = "#FFFF00");
        break;
      case 51:
      case 99:
        oEvent.ctrlKey && (oBox.style.background = "#0000FF");
        break;
      default:
        break;
    }
    return false;
  };
  //键盘抬起，为false
  document.onkeyup = function(ev) {
    var oEvent = ev || event;
    var keyCode = oEvent.keyCode;
    switch (keyCode) {
      case 38:
      case 87:
        up = false;
        break;
      case 40:
      case 83:
        down = false;
        break;
      case 37:
      case 65:
        left = false;
        break;
      case 39:
      case 68:
        right = false;
        break;
      default:
        break;
    }
  };
  function limit() {
    var doc = [
      document.documentElement.clientWidth || document.body.clientWidth,
      document.documentElement.clientHeight || document.body.clientHeight
    ];
    //防止左侧溢出
    oBox.offsetLeft < 0 && (oBox.style.left = 0);
    //防止上侧溢出
    oBox.offsetTop < 0 && (oBox.style.top = 0);
    //防止右侧溢出
    oBox.offsetLeft > doc[0] - oBox.offsetWidth &&
      (oBox.style.left = doc[0] - oBox.offsetWidth + "px");
    //防止下侧溢出
    oBox.offsetTop > doc[1] - oBox.offsetHeight &&
      (oBox.style.top = doc[1] - oBox.offsetHeight + "px");
  }
};
