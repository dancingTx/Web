window.onload = function () {
    var aLi = document.getElementsByTagName("li");
    var aImg = document.getElementsByTagName("img");
    for (var i = 0; i < aLi.length; i++) {
        aLi[i].index = i;
        aLi[i].onmouseover = function () {
            for (var i = 0; i < aLi.length; i++) {
                aImg[i].style.display = "none";
            }
            aImg[this.index].style.display = "block";
        }
        aLi[i].onmouseout = function () {
            aImg[this.index].style.display = "none";
        }
    }
}