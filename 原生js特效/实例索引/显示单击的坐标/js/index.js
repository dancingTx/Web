window.onload = function () {
    document.onclick = function (ev) {
        var oEvent = ev || event;
        alert("坐标:" + oEvent.clientX + "," + oEvent.clientY);
    }
}