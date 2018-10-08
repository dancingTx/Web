window.onload = function () {
    var oTxt1 = document.getElementById("txt1");
    var oTxt2 = document.getElementById("txt2");
    var oSpan = document.getElementsByTagName("span")[0];
    var oBtn = document.getElementById("btn");
    oBtn.onclick = function () {
            var val1 = parseInt(oTxt1.value);
            var val2 = parseInt(oTxt2.value);
            oSpan.innerHTML = val1 + val2;
    }

}