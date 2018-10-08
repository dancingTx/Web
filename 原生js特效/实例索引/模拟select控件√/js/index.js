window.onload = function () {
    var oSpan= document.getElementsByTagName("span")[0];
    var oSel = document.getElementById("select");
    var aLi = oSel.getElementsByTagName("li");
    oSpan.onclick = function (ev) {
        var oEvent = ev||event;
        oSel.style.display = "block";
        oEvent.cancelBubble = true;
    }

    document.onclick = function () { 
         oSel.style.display = "";
     }
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].addEventListener("mouseover", function () {
            this.className = "actived";
        }, false);
        aLi[i].addEventListener("mouseout", function () {
            this.className = "";
        }, false);
        aLi[i].addEventListener("click", function () {
            oSpan.innerHTML = this.innerHTML;
        }, false);
    }
}