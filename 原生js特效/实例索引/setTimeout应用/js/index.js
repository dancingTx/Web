window.onload = function () { 
    var oNav = document.getElementById("nav");
    var aLi = oNav.getElementsByTagName("li");
    var oTab = document.getElementById("tab");
    var timer = null;
    function getDis() {
        oTab.style.display = "none";
    }
    for(var i=0;i<aLi.length;i++){
        aLi[i].onmouseover = function () { 
            for(var i=0;i<aLi.length;i++){
                aLi[i].className = "";
            }
            this.className = "actived";
            oTab.style.display = "block";
         }
         aLi[i].onmouseout = function () { 
             this.className = "";
            timer = setTimeout(getDis, 1000);
          }
         
    }
     oTab.onmouseover = function () {
         clearTimeout(timer);
     }
     oTab.onmouseout = function () { 
        timer = setTimeout(getDis, 1000);
      }
 }
