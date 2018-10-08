function format(date) {
    return date.toString().replace(/^(\d)$/, "0$1");
}
window.onload = function () { 
    var oBtn = document.getElementById("btn");
    var aLi = document.getElementsByTagName("li");
    var Stop = false;
    var timer = null;
    var date = 100; 
    oBtn.onclick = function () { 
         date--;
         aLi[1].innerHTML = format(parseInt(date % 60));
        clearInterval(timer);
        if(!Stop){
           oBtn.className = "exit";
           oBtn.value = "取消";
           timer = setInterval(getTime,1000); 
           Stop = true;
        }else{
            oBtn.className = "";
            oBtn.value = "启动";
            clearInterval(timer);
            Stop = false;
        }
        function getTime() {
            aLi[0].innerHTML = format(parseInt(date/60));
            aLi[1].innerHTML = format(parseInt(date%60));
            date--;
            if(date == -1){
                clearInterval(timer);
            }
        }
       
     }
 }