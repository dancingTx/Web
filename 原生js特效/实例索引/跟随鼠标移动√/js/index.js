window.onload = function () { 
    var aLi = document.getElementsByTagName("li");
    var oBig = document.getElementById("big");
    var oLoad = oBig.getElementsByTagName("div")[0];
    for(var i=0;i<aLi.length;i++){
        //图片预加载
        aLi[i].index = i;
        aLi[i].onmouseover = function () { 
            var oImg = document.createElement("img");
            var img = new Image();
             oImg.src = aLi[this.index].getElementsByTagName("img")[0].src.replace(".jpg","_big.jpg");
            oBig.appendChild(oImg);
            //显示big
            oBig.style.display ="block";
            //显示加载成功与否
            img.complete?oLoad.style.display = "none":
            (oImg.onload=function () { 
                oLoad.style.display = "none";
             });
         }
         //大图跟随鼠标移动
        aLi[i].onmousemove = function (ev) { 
            var oEvent = ev||event;
            var iWidth = document.documentElement.offsetWidth-oEvent.clientX;
            //设置big的top
            oBig.style.top = oEvent.clientY + 20+"px";
            //设置big的left
            oBig.style.left = (iWidth<oBig.offsetWidth+10?oEvent.clientX-oBig.offsetWidth-10:oEvent.clientX+10)+"px";
         }
         //鼠标移出，删除大图并且隐藏容器
         aLi[i].onmouseout = function () { 
            oBig.style.display = "none";
            oBig.removeChild(oBig.lastChild);
          }
    }

 }