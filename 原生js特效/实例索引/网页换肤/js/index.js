function getColor(obj, color) {
    return obj.style.background = color;
}
window.onload = function () {
    var aOl = document.getElementById("btn");
    var aLi = aOl.getElementsByTagName("li");
    var aUl = document.getElementById("banner");
    var aDiv = aOl.getElementsByTagName("div");
    var colors = ["#f00", "#f0f", "#000"];
    var colors1 = ["#FFDDDD", "#A3C5A8", "#CCCCCC"];
    for (var i = 0; i < aLi.length; i++) {
        getColor(aLi[i], colors[i]);
        aLi[i].index = i;
        aLi[i].onclick = function () {
            for (var i = 0; i < aLi.length; i++) {
                aDiv[i].className = "";
                document.body.style.background = "";
                aUl.style.background = "";
            }
            aDiv[this.index].className = "actived";
            document.body.style.background = colors1[this.index];
            aUl.style.background = colors[this.index];
        }


    }
}