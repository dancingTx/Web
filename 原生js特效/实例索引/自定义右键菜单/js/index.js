window.onload = function () { 
    var oUl = document.getElementsByTagName("ul")[0];
    var aLi = oUl.getElementsByTagName("li");
    document.oncontextmenu = function (ev) { 
        var oEvent = ev||event;
         oUl.style.display = "block";
         oUl.style.left = oEvent.clientX+"px";
         oUl.style.top = oEvent.clientY +"px";
        for(var i=0;i<aLi.length;i++){
            aLi[i].onmouseover = function () { 
                this.className = "actived";
             }
             aLi[i].onmouseout = function () { 
                 this.className = "";
              }
        }
        return false;
     }
     document.onclick = function () { 
         oUl.style.display = "none";
      }
      
 }