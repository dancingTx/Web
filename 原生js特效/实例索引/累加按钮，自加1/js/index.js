window.onload = function () { 
    var oBtn = document.getElementById("btn");
    var count = 0;
    oBtn.onclick = function () { 
        oBtn.value++;
        alert(oBtn.value);
     }
 }