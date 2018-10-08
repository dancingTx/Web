window.onload = function () {
    var aImg = document.getElementsByTagName("img");
    var oLoad = document.getElementById("load");
    for (var i = 0; i < aImg.length; i++) {
        aImg[i].onmouseover = function () {
            var img = new Image();
            img.src = aImg[0].src = this.src.replace(/small/, "big");
            oLoad.style.display = "block";
            img.complete ? oLoad.style.display = "none" : (aImg[0].onload = function () {
                oLoad.style.display = "none";
            })
        }
    }
}