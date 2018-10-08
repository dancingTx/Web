    function addListener(obj, ev, fn) {
        if (obj.attachEvent) {
            obj.attachEvent("on" + ev, fn);
        } else {
            obj.addEventListener(ev, fn);
        }
    }
    window.onload = function () {
        var oTxt1 = document.getElementById("txt1");
        var oTxt2 = document.getElementById("txt2");
        var oBtn = document.getElementById("btn");
        addListener(oBtn, "click", function () {
            alert(oTxt1.value);
        });
        addListener(oBtn, "click", function () {
            alert(oTxt2.value);
        });
    }