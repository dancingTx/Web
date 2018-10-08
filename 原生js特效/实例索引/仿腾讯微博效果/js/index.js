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
    addloadEvent: function (fn) {
        this.addEvent(window, "load", fn);
    }
}
var get = {
    byId: function (id) {
        return typeof id == "string" ? document.getElementById(id) : id;
    },
    byClass: function (sClass, oParent) {
        var oEle = this.byTagName("*", oParent);
        var aClass = [];
        var reClass = new RegExp("(^|)" + sClass + "(|$)");
        for (var i = 0; i < oEle.length; i++) {
            reClass.test(oEle[i].clasName) && aClass.push(oEle[i]);
        }
        return aClass;
    },
    byTagName: function (obj, elem) {
        return (document || obj).getElementsByTagName(elem);
    }
}
EventUtil.addloadEvent(function () {
    var oBtn = get.byId("btn");
    var oInput = get.byId("input");
    var oUser = get.byId("user");
    var oUl = get.byId("ul");
    var oNum = get.byTagName(get.byId("button"), "span")[0];
    var oImg = get.byTagName(get.byId("img"), "img");
    var timer = null;
    //控制字数显示
    timer = setInterval(function () {
        oNum.innerHTML = 140 - oInput.value.length;
    }, 30);
    //点击按钮
    EventUtil.addEvent(oBtn, "click", tab);
    //使用键盘发送
    EventUtil.addEvent(oInput, "keydown", function (ev) {
        var oEvent = ev || window.event;
        var keyCode = oEvent.keyCode;
        (keyCode == 13 && oEvent.ctrlKey) && tab();
    });
    //发送内容
    function tab() {
        var aLi = document.createElement("li");
        var date = new Date();
        aLi.innerHTML = "<div class = \"text\">\
              <a href = \"javascript:;\"class = \"user\" >" + oUser.value + "</a><span class=\"colon\">:</span >\
              <span class = \"txt\" > " + oInput.value + "</span> \
              <span class = \"date\" > " + format(date.getMonth() + 1) + "\u6708" + format(date.getDate()) + "\u65e5" +
            format(date.getHours()) + ":" + format(date.getMinutes()) + "</span> \
              </div> \
              <div class = \"clear\" ></div>";

        if (oUl.children.length > 0) {
            oUl.insertBefore(aLi, oUl.childNodes[0]); //要插入谁，插入到哪；  
        } else {
            oUl.appendChild(aLi);
        }
        oInput.value = "";
        var iHeight = aLi.offsetHeight;
        aLi.style.height = 0; //动态获取高度 如果不加，ali本身有高度
        startMove(aLi, {
            "height": iHeight
        }, function () {
            startMove(aLi, {
                "opacity": 100
            });
        });
    }
    //点击小图
    for (var i = 0; i < oImg.length; i++) {
        oImg[i].onmouseover = function () {
            this.className += " hover";
        }
        oImg[i].onmouseout = function () {
            this.className = this.className.replace(/\s?hover/, "");
        }
        oImg[i].onclick = function () {
            for (var i = 0; i < oImg.length; i++) {
                oImg[i].className = "";
            }
            this.className = "current";
        }
    }
});