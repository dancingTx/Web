function getByStyle(obj,name) { 
    if(obj.currentStyle){
        return obj.currentStyle(name);
    }else{
        return getComputedStyle(obj,false)[name];
    }
 }

function getOp(obj, attr, iTarget) {
    var iSpeed = 0;
    var iCurr = 0;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
    iCurr = parseFloat(getByStyle(obj, attr))*100;
    iSpeed = (iTarget-iCurr)/10;
    iSpeed = iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);
        if (iCurr == iTarget) {
            clearInterval(obj.timer);
        } else {
            obj.style.filter = `alpha(opacity=${iCurr+iSpeed})`;
            obj.style.opacity = (iCurr+iSpeed)/100;
        }
    }, 30);
}

window.onload = function () {
    var oUl = document.getElementById("ul");
    var aLi = oUl.getElementsByTagName("li");
    for(var i=0;i<aLi.length;i++){
        aLi[i].onmouseover = function () { 
            getOp(this,"opacity",100);
         }
        aLi[i].onmouseout = function () { 
            getOp(this,"opacity",30);
         }
    }
}