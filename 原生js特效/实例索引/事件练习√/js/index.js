var EventUtil = {
    addEvent: function (obj, ev, fn) {
        if (obj.attachEvent) {
            return obj.attachEvent("on" + ev, fn);
        } else {
            return obj.addEventListener(ev, fn, false);
        }
    },
    removeEvent: function (obj, ev, fn) {
        if (obj.detachEvent) {
            return obj.detachEvent("on" + ev, fn);
        } else {
            return obj.removeEventListener(ev, fn, false);
        }
    },
    addLoadEvent: function (fn) {
        this.addEvent(window, "load", fn);
    }
}

function fnClick() {
    alert("事件绑定成功");
}
EventUtil.addLoadEvent(function () {
    var oBtn = document.getElementsByTagName("input");
    EventUtil.addEvent(oBtn[1], "click", function () {
        oBtn[0].value = "我可以点击了";
        EventUtil.addEvent(oBtn[0], "click", fnClick);
    });
    EventUtil.addEvent(oBtn[2], "click", function () {
        oBtn[0].value = "毫无用处的按钮";
        EventUtil.removeEvent(oBtn[0], "click", fnClick);
    });
});