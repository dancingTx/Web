window.onload = function () {
    var oBox = document.getElementById("box");
    var aLi = document.getElementsByTagName("li");
    var oBtn = document.getElementById("btn");
    var oDiv = document.getElementById("div");
    var oDiv1 = document.createElement("div");
    var disX, disY = 0;
    var maxL, maxT = 0;
    var click = false;
    var oPos = [{
        x: oBox.offsetLeft,
        y: oBox.offsetTop
    }];
    //当方框被鼠标按下
    oDiv.onmousedown = function (ev) {
        var oEvent = ev || event;
        disX = oEvent.clientX - oBox.offsetLeft;
        disY = oEvent.clientY - oBox.offsetTop;
        oDiv1.setAttribute("class", "box");
        oDiv1.style.width = oBox.offsetWidth - 4 + "px";
        oDiv1.style.height = oBox.offsetHeight - 4 + "px";
        document.body.appendChild(oDiv1);
        oDiv1.style.left = oBox.offsetLeft + "px";
        oDiv1.style.top = oBox.offsetTop + "px";
        document.onmousemove = mouseMove;
        document.onmouseup = oDiv.onlosecapture = window.onblur = mouseUp;
        this.setCapture && this.setCapture();
        oPos.push({
            x: oBox.offsetLeft,
            y: oBox.offsetTop
        });
        return false;
    }
    //当方框被拖拽
    function mouseMove(ev) {
        var oEvent = ev || event;
        var doc = [document.documentElement.clientWidth || document.body.clientWidth,
            document.documentElement.clientHeight || document.body.clientHeight
        ];
        iL = oEvent.clientX - disX;
        iT = oEvent.clientY - disY;
        maxL = doc[0] - oBox.offsetWidth;
        maxT = doc[1] - oBox.offsetHeight;
        iL = iL < 0 ? 0 : iL;
        iL = iL > maxL ? maxL : iL;
        iT = iT < 0 ? 0 : iT;
        iT = iT > maxT ? maxT : iT;
        oDiv1.style.left = iL + "px";
        oDiv1.style.top = iT + "px";
        click = true;
        oPos.push({
            x: iL,
            y: iT
        });
        status();
        return false;
    }
    //当方框被松开
    function mouseUp() {
        document.onmousemove = null;
        document.onmouseup = null;
        oBox.style.left = oDiv1.offsetLeft + "px";
        oBox.style.top = oDiv1.offsetTop + "px";
        document.body.removeChild(oDiv1);
        oDiv.releaseCapture && oDiv.releaseCapture();
        click = false;
        status();
    }
    oBtn.onmousedown = function (ev) {
        var oEvent = ev || event;
        oEvent.cancelBubble = true;
    }
    oBtn.onclick = function () {
        if (oPos.length == 1) return;
        var timer = null;
        timer = setInterval(function () {
            var aPos = oPos.pop();
            aPos ? (oBox.style.left = aPos.x + "px", oBox.style.top = aPos.y + "px", status()) : clearInterval(timer);
        }, 30);
    }
    //监听事件
    function status() {
        aLi[0].innerHTML = click;
        aLi[1].innerHTML = oBox.offsetTop;
        aLi[2].innerHTML = oBox.offsetLeft;
    }
    status(); //初始化调用
}