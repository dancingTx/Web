window.onload = function () {
    var oBox = document.getElementById("box");
    var count = 0;
    var timer = null;
    oBox.onclick = function () {
        timer = setInterval(function () { 
            oBox.style.display = count++ %2 ?"none":"block";
            count >6&&(clearInterval(timer));
         },80);
    }
}