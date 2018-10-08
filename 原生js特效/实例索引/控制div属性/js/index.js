 function getStyle(obj, attr, value) {
     return obj.style[attr] = value;
 }
 window.onload = function () {
     var oBtn = document.getElementsByTagName("input");
     var oBox = document.getElementById("box");
     var oStyle = ["height", "width", "background", "display", "display"];
     var oValue = ["300px", "300px", "green", "none", "block"];
     for (var i = 0; i < oBtn.length; i++) {
         oBtn[i].index = i;
         oBtn[i].onclick = function () {
             oBox.style.cssText = "";
             getStyle(oBox, oStyle[this.index], oValue[this.index]);
         }
     }
 }