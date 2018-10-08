window.onload = function () { 
    var oBtn = document.getElementById("btn");
    var oBox = document.getElementById("box");
    var oHide = document.getElementById("overflow");
    var oExt = document.getElementById("exit");
    oBtn.onclick = function () { 
        oBox.style.display = "block";
        oHide.style.display = "block";
     }
     oExt.onclick  = function () { 
         oBox.style.display = "none";
         oHide.style.display = "none";
      }
 }