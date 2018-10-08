 function getArr(str) {
     var arr = [];
     str = str.split(",");
     for (var i in str) {
         arr.push(str[i]);
     }
     return arr;
 }
 window.onload = function () {
     var oBtn = document.getElementsByTagName("input");
     var oSpan = document.getElementsByTagName("span");
     var bS1 = true;
     var aTmp = [];
     //删除Jan
     oBtn[0].onclick = function () {
         aTmp = getArr(oSpan[0].innerHTML);
         bS1 ?
             //删除，shift（）；从开始位置删除
             (aTmp.shift(), this.value = this.value.replace("删除", "添加"), bS1 = false) :
             //添加，unshift（）；从开始位置添加
             (aTmp.unshift("January(1)"), this.value = this.value.replace("添加", "删除"), bS1 = true);
         oSpan[0].innerHTML = aTmp.join();
     }
     //删除December
     oBtn[1].onclick = function () {
         aTmp = getArr(oSpan[0].innerHTML);
         bS1 ?
             //删除，pop（）；从结尾位置删除
             (aTmp.pop(), this.value = this.value.replace("删除", "添加"), bS1 = false) :
             //添加，push();从结尾位置添加
             (aTmp.push("December(12)"), this.value = this.value.replace("添加", "删除"), bS1 = true);
         oSpan[0].innerHTML = aTmp.join();
     }
     //复制
     oBtn[2].onclick = function () {
         aTmp = getArr(oSpan[1].innerHTML);
         //复制，slice();contact();
         aTmp = aTmp.concat(aTmp.slice());
         oSpan[1].innerHTML = aTmp.join();
     }
     //还原
     oBtn[3].onclick = function () {
         //还原，截取0-10位的数字
         aTmp = getArr(oSpan[1].innerHTML);
         aTmp = aTmp.slice(0, 10);
         oSpan[1].innerHTML = aTmp.join();
     }
     //还原 骚气
     oBtn[4].onclick = function () {
         //还原，截取0-7位的字符串
        aTmp = ["red", "green", " blue", "white", "yellow", "black", "brown"];
         oSpan[2].innerHTML = aTmp.join();
     }
     //删除前三项;
     oBtn[5].onclick = function () {
         aTmp = getArr(oSpan[2].innerHTML);
         aTmp.splice(0,3);
         oSpan[2].innerHTML = aTmp.join();
     }
     //删除第二至第三项
     oBtn[6].onclick = function () {
         aTmp = getArr(oSpan[2].innerHTML);
         aTmp.splice(1, 2);
         oSpan[2].innerHTML = aTmp.join();
     }
     //在第二项后插入(orange,purple)
     oBtn[7].onclick = function () {
         aTmp = getArr(oSpan[2].innerHTML);
         aTmp.splice(1, null, "orange", "purple");
         oSpan[2].innerHTML = aTmp.join();
     }
     //替换第二项和第三项
     oBtn[8].onclick = function () {
         aTmp = getArr(oSpan[2].innerHTML);
         aTmp.splice(1, 2, "#009900", "#0000ff");
         oSpan[2].innerHTML = aTmp.join();
     }
 }