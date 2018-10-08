window.onload = function () { 
    var aLi = document.getElementsByTagName("li");
        setInterval(getTime,1000);
        getTime();
    function getTime() { 
         var date = new Date();
         var dates = [date.getHours(), date.getMinutes(), date.getSeconds()];
        for (var i in dates) {
            aLi[i].innerHTML = format(dates[i]);
        }
     }
     function format(date) { 
        return date.toString().replace(/^\d$/,"0$1");
      }
 }