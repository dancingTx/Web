window.onload = function () {
    var oBox = document.getElementById("div");
    var oDiv = oBox.getElementsByTagName("div");
    var oBtn = document.getElementById("btn");
    oBtn.onclick = function () {
        for (var i = 0; i < oDiv.length; i++) {
            oDiv[i].style.background = "#F00";
        }
    }
}