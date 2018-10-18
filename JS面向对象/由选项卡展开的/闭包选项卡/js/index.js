 window.onload = function () {
     let oBtn = document.getElementsByTagName("input"),
         aLi = document.getElementsByTagName("li");
     for (let i = 0; i < oBtn.length; i++) {
         oBtn[i].onclick = (function () {
             return function () {
                 for (let i = 0; i < oBtn.length; i++) {
                     oBtn[i].className = "";
                     aLi[i].style.display = "none";
                 }
                 this.className = "active";
                 aLi[i].style.display = "block";
             }
         })(i)
     }
 }