window.onload = function () { 
    var oOl = document.getElementById("btn");
    var aLi = oOl.getElementsByTagName("li");
    var oUl = document.getElementById("tab");
    var aLiTab = oUl.getElementsByTagName("li");
    for(var i=0;i<aLi.length;i++){
        aLi[i].index = i;
        aLi[i].onmouseover = function () { 
            for(var i=0;i<aLi.length;i++){
                aLi[i].className = "";
                aLiTab[i].style.display = "none";
            }
            this.className = "actived";
            aLiTab[this.index].style.display = "block";
         }
    }
 }