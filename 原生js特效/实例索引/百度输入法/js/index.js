window.onload = function () {
    var oBtn = document.getElementById("btn");
    var oUl = document.getElementById("ul");
    var aLi = document.getElementsByTagName("li");
    var oExt = document.getElementsByClassName("exit")[0];
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].onmouseover = function () {
            this.className = "actived";
        }
        aLi[i].onmouseout = function () {
            this.className = "";
        }
    }
    oBtn.onclick = function () {
        if (oUl.style.display == "none") {
            oUl.style.display = "block";
        } else {
            oUl.style.display = "none";
        }
    }
    oExt.onclick = function () {
        oUl.style.display = "none";
    }
}