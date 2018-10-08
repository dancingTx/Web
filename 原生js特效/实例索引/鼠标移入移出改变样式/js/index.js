window.onload = function () {
    var oDiv = document.getElementById("div");
    oDiv.onmouseover = function () {
        oDiv.className = "actived";
    }
    oDiv.onmouseout = function () {
        oDiv.className = "";
    }
}