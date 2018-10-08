window.onload = function () {
    var oBox = document.getElementById("box");
    var count = 0;
    var timer = null;
    oBox.onclick = function () {
        timer = setInterval(function () {
            oBox.style.display = "none";
            count++;
            console.log(count);
             if (count >= 4) {
                 count = 0;
                 clearInterval(timer);
             }
        }, 100);
        setInterval(function () {
            oBox.style.display = "block";
        }, 300);
     
    }
    
}