function alert(data) {
    /**
     * <div id="overflow"></div>遮罩层
     *<div>
     <p>文字</p>
     <div>确定<div>
    </div>
     *
     */
          //遮罩层
    var oDiv = document.createElement("div");
         //外层div
        div = document.createElement("div"),
        //p标签
        p = document.createElement("p"),
        //line标签
        line = document.createElement("div"),
        //内层div->按钮
        btn = document.createElement("div"),
        //创建p标签中的文本节点
        txtNode = document.createTextNode(data ? data : ""),
        //创建div标签中的文本节点
        btnNode = document.createTextNode("确定");
    //创建css样式
    function css(obj,attr) { 
        for (var i in attr) {
            obj.style[i] = attr[i];
        }
     }
    css(oDiv,{
        "position":"absolute",
        "top":"0",
        "left":"0",
        "width":"100%",
        "height":"100%",
        "background-color":"#000",
        "filter": "alpha(opacity=60)",
        "opacity":".6"
    })
    css(div, {
        position: "absolute",
        top: "40%",
        left: "39%",
        width: "420px",
        height: "180px",
        background: "#E8E8E8",
        "border-radius": "10px"
    });
    css(p, {
        width: "420px",
        height: "140px",
        background: "#E8E8E8",
        margin: "0",
        "border-radius": "10px",
        "font-size": "18px",
        "line-height": "140px",
        "text-align": "center"
    });
    css(line, {
        width: "420px",
        height: "1px",
        background: "#C2C2C2"
    });
    css(btn, {
        width: "420px",
        height: "40px",
        background: "#E8E8E8",
        "border-radius": "10px",
        color: "#4DC84D",
        "font-size": "18px",
        "line-height": "40px",
        "text-align": "center"
    });
    p.appendChild(txtNode);
    btn.appendChild(btnNode);
    div.appendChild(p);
    div.appendChild(line);
    div.appendChild(btn);
    document.getElementsByTagName("body")[0].appendChild(oDiv);
    document.getElementsByTagName("body")[0].appendChild(div);
    btn.onclick = function () {
        div.parentNode.removeChild(div);
        oDiv.parentNode.removeChild(oDiv);
    }
}

