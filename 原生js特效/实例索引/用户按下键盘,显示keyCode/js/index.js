window.onload = function () { 
    var oSpan = document.getElementsByTagName("span")[0];
    document.onkeydown = function (ev) { 
        var oEvent = ev||event;
        oSpan.innerHTML = oEvent.keyCode;
     }
 }