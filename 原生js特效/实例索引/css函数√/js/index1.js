function css(obj, attr, value) {
    switch (arguments.length) {
        case 2: //两个参数
            if (typeof arguments[1] == "object") {
                //如果第二个参数为对象，则批量设置属性
                for (var i in attr) {
                    obj.style[i] = attr[i];
                }
            } else {
                //如果第二个参数为字符串，则返回属性值
                return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, null)[attr];
            }
            break;
        case 3: //三个参数
            obj.style[attr] = value;
            break;
        default:
            throw new Error("参数错误");
    }
}
window.onload = function () {
    var oBox = document.getElementById("box");
    var aLi = oBox.getElementsByTagName("li");
    //获取属性
    aLi[0].onclick = function () {
        //两个参数，并且第二个参数为字符串，返回参数值
        alert("width:" + css(oBox, "width") + "\nheight:" + css(oBox, "height") + "\nbackground-color:" + css(oBox, "background-color"));
    }
    //设置属性
    aLi[1].onclick = function () {
        //两个参数，并且第二个参数为对象，设置参数值
        css(oBox, {
            "width": "300px",
            "height": "100px",
            "background-color": "#EFF8FF",
            "border-color": "#0084FF"
        });
        //三个参数，直接设置属性值
        for (var i = 0; i < aLi.length; i++) {
            css(oBox, "background-color", "#0084FF");
        }
    }
    aLi[2].onclick = function () {
        //两个参数，并且第二个参数为对象，设置参数值
        css(oBox, {
            "width": "400px",
            "height": "200px",
            "background-color": "#FEF4EB",
            "border-color": "#f60"
        });
        //三个参数，直接设置属性值
        for (var i = 0; i < aLi.length; i++) {
            css(oBox, "background-color", "#f60");
        }
    }
}