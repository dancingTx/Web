window.onload = function () {
    var oBtn = document.getElementById("title");
    var oNav = document.getElementById("nav");
    var oLi = document.getElementsByTagName("dd");
    var oImg = document.getElementById("img");
    oBtn.onclick = function () {
        if (oNav.style.display == "none") {
            oNav.style.display = "block";
            oImg.className = "down";
        } else {
            oNav.style.display = "none";
            oImg.className="up";
        }
    }
    for(var i=0;i<oLi.length;i++){
        oLi[i].onmouseover = function () { 
            this.className = "actived";
         }
         oLi[i].onmouseout = function () { 
             this.className = "";
          }
    }
}