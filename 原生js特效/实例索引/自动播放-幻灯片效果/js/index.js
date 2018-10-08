function getByStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return getComputedStyle(obj, false)[attr];
    }
}

function startMove(obj, json, fn) {
    var iSpeed = 0;
    var iCurr = 0;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        for (var attr in json) {
            if (attr == "opacity") {
                iCurr = parseFloat(getByStyle(obj, attr)) * 100;
            } else {
                iCurr = parseInt(getByStyle(obj, attr));
            }
            iSpeed = (json[attr] - iCurr) / 10;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (iCurr == json[attr]) {
                clearInterval(obj.timer);
                fn && fn();
            } else {
                if (attr == "opacity") {
                    obj.style.filter = `alpha(opacity=${iCurr+iSpeed})`;
                    obj.opacity = (iCurr + iSpeed) / 100;
                } else {
                    obj.style[attr] = iCurr + iSpeed + "px";
                }
            }
        }
    }, 30);
}

window.onload = function () {
    var oTab = document.getElementById("tab");
    var aLiImg = oTab.getElementsByTagName("li");
    var oBtn = document.getElementById("btn");
    var aLiBtn = oBtn.getElementsByTagName("li");
    var now = 0;
    var timer = null;
    oTab.style.width = aLiImg.length * aLiImg[0].offsetWidth + 100 + "px";
    for (var i = 0; i < aLiBtn.length; i++) {
        aLiBtn[i].index = i;
        aLiBtn[i].onmouseover = function () {
            now = this.index;
            Tab();
        }
    }

    function Tab() {
        for (var i = 0; i < aLiBtn.length; i++) {
            aLiBtn[i].className = "";
        }
        aLiBtn[now].className = "actived";
        startMove(oTab, {
            "left": -512 * now
        });
    }

    function next() {
        now++;
        now == aLiImg.length && (now = 0);
        Tab();
    }
    timer = setInterval(next, 10000);
    oTab.onmouseover = oBtn.onmouseover = function () {
        clearInterval(timer);
    }
    oTab.onmouseout = oBtn.onmouseout = function () {
        timer = setInterval(next, 10000);
    }

}