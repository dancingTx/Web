window.onload = function () { 
    var oInput = document.getElementsByTagName("input");
    // var oSpan = document.getElementsByTagName("span")[0];
    var oA = document.getElementsByTagName("a")[0];
   
    oInput[0].onclick = function () { 
         for (var i = 0; i < oInput.length; i++)
        oInput[i].checked = this.checked;
     }
    oA.onclick = function () { 
        for (var i=0;i<oInput.length;i++) {
            oInput[i].checked = !oInput[i].checked;
        }
     }
 }