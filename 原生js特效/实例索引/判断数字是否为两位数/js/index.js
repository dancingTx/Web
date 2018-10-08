window.onload = function () {
    var oBtn = document.getElementById("btn");
    var oTxt = document.getElementById("txt");
    oTxt.onkeyup = function () {
        this.value = this.value.replace(/[^\d]/, "");
    }
    oBtn.onclick = function () {
        (oTxt.value == "") ?
        alert("请输入数字"): alert(/^\d{2}$/.test(parseInt(oTxt.value)) ?
            "√ 是两位数字" : `这是${oTxt.value.length}位数`);
    }
}