    function getStyle(obj, attr) {
        if (obj.currentStyle) {
            return obj.currentStyle[attr];
        } else {
            return getComputedStyle(obj, false)[attr];
        }
    }

    function startMove(obj, json, fn) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var Stop = true; //假设全部到达目标值
            for (var attr in json) {
                var iCur = 0;
                if (attr == 'opacity') {
                    iCur = parseFloat(getStyle(obj, attr)) * 100;
                } else {
                    iCur = parseInt(getStyle(obj, attr));
                }
                var iSpeed = (json[attr] - iCur) / 8;
                iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                if (iCur != json[attr]){
                    Stop = false;
                }
                if (attr == 'opacity') {
                    obj.style.filter = 'alpha(opacity:' + (iCur + iSpeed) + ')';
                    obj.style.opacity = (iCur + iSpeed) / 100;
                } else {
                    obj.style[attr] = iCur + iSpeed + 'px';
                }
            }
            if (Stop) {
                clearInterval(obj.timer);
                if (fn) fn();
            }
        }, 30);
    }

    function getByClass(oParent, sClass) {
        var aEle = oParent.getElementsByTagName('*');
        var i = 0;
        var aResult = [];
        for (i = 0; i < aEle.length; i++) {
            if (aEle[i].className == sClass) {
                aResult.push(aEle[i]);
            }
        }
        return aResult;
    }