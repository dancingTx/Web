function css(obj, attr, value) {
    switch (arguments.length) {
        case 2:
            //如果第二个属性为对象，批量设置属性
            if (typeof arguments[1] == "object") {
                for (var i in attr) {
                    obj.style[i] = attr[i];
                }
            } else {
                //如果第二个属性为字符串，读取属性
                return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
            }
            break;
        // case 3:   //这句话可以不用
        //     //三个参数，直接设置属性
        //     obj.style[attr] = value;
        //     break;
        default:
            alert("参数错误");
            break;
    }
}

window.onload = function () {
    var oBox = document.getElementById("box");
    var aLi = oBox.getElementsByTagName("li");
    aLi[0].onclick = function () {
        //获取属性，两个参数,第二个参数为字符串，读取属性值
        alert("width:" + css(oBox, "width") + "\nheight:" + css(oBox, "height") + "\nbackground-color:" + css(oBox, "backgroundColor"));
    }
    aLi[1].onclick = function () {
        //设置属性，两个参数，第二个参数为对象，批量设置；
       css(oBox, {
            width: "300px",
            height: "300px",
            borderColor: "#0084ff",
            backgroundColor: "#eff8ff"
        });
        console.log(oBox.style.width);
        //设置属性，三个参数，直接设置属性
        for (var i = 0; i < aLi.length; i++) {
            css(aLi[i], {"backgroundColor": "#0084ff"});
        }
    }
    aLi[2].onclick = function () {
        //设置属性，两个参数，第二个参数为对象，批量设置；
        css(oBox, {
            width: "400px",
            height: "200px",
            borderColor: "#f60",
            backgroundColor: "#fef4eb"
        });
        //设置属性，三个参数，直接设置属性,单一设置
        for (var i = 0; i < aLi.length; i++) {
            css(aLi[i], {"background-color": "#f60"});
        }
    }
}