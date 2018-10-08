window.onload = function () {
    var oDiv = document.getElementById("div");
    var oBox = document.getElementById("box");
    oDiv.onmouseover = function () {
        oBox.style.display = "block";
    }
    oDiv.onmouseout = function () {
        oBox.style.display = "none";
    }
}