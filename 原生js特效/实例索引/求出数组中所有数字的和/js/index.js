window.onload = function () {
    var oBtn = document.getElementById("btn");
    var oValue = document.getElementById("value");
    var oTxt = document.getElementById("txt");
    oTxt.onkeydown = function (ev) { 
        var keyCode = ev.keyCode;
        console.log(keyCode);
        if(!isNumber(keyCode)){
            // alert("请输入数字");
            return false;
        } 
      
     }
    oTxt.onkeyup = function () { 
        this.value = this.value.replace(/[^(\d)|(,)]/ ,"");
     }
    oBtn.onclick = function () {
       var sum = 0;
       var  oTxt = document.getElementById("txt").value.split(",");
        for (var i in oTxt) {
            sum += parseInt(oTxt[i]);
        }
        oValue.innerHTML = sum;
    }

    function isNumber(keyCode) {
        if (keyCode >= 48 && keyCode <= 57) return true;
        if (keyCode >= 96 && keyCode <= 105) return true;
        if (keyCode == 8 || keyCode == 46 || keyCode == 37 || keyCode == 39 ||keyCode == 188) return true;
        return false;
    }
}