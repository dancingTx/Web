 function $(id) {
     return document.getElementById(id);
 }
 function getByStyle(obj, attr, value) {
     switch (arguments.length) {
         case 2:
             if (typeof arguments[1] == "object") {
                 for (var i in attr) {
                     obj.style[i] = attr[i];
                 }

             } else {
                 return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
             }
             break;
         case 3:
             obj.style[attr] = value;
             break;
         default:
             alert("参数错误");
     }
 }

 function startMove(obj, json, fn) {
     iSpeed = 0;
     iCurr = 0;
     clearInterval(obj.timer);
     obj.timer = setInterval(function () {
         for (var attr in json) {
             if (attr == "opacity") {
                 iCurr = parseFloat(getByStyle(obj, attr)) * 100;
             } else {
                 iCurr = parseInt(getByStyle(obj, attr));
             }
             iSpeed = (json[attr] - iCurr) / 10;
             iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
             if (iCurr == json[attr]) {
                 clearInterval(obj.timer);
                 fn && fn();
             } else {
                 if (attr == "opacity") {
                     obj.style.filter = "alpha(opacity=" + (iCurr + iSpeed) + ")";
                     obj.style.opacity = (iCurr + iSpeed) / 100;
                 } else {
                     obj.style[attr] = iCurr + iSpeed + "px";
                 }
             }
         }
     }, 30);
 }

function format(date) { 
    return date.toString().replace(/^(\d)$/,"0$1");
 }