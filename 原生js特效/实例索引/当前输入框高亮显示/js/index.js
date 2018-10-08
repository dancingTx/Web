window.onload = function () {
    var oTxt = document.getElementsByTagName("input");
    for (var i = 0; i < oTxt.length - 1; i++) {
        oTxt[i].onfocus = function () { //焦点在文本框上
            this.className = "actived";
        }
        oTxt[i].onblur = function () { //焦点不再文本框上
            this.className = "";
        }
    }
}