function getStyle(obj,name,value) { 
    return obj.style[name] = value;
 }
 function $(id) { 
     return document.getElementById(id);
  }
window.onload = function () { 
    var oItem = $("item");
    var oVal = $("value");
    var oBtnOk = $("btn_Ok");
    var oBtnRes = $("btn_Reset");
    var oBox = $("box");
    oBtnOk.onclick = function () { 
        getStyle(oBox,oItem.value,oVal.value);
     }
    oBtnRes.onclick = function () { 
        oBox.style.cssText = "";
     }
 }