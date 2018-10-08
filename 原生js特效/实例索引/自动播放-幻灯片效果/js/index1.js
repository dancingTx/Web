window.onload = function () {
    var oBox = document.getElementById("box");
    var oTab = document.getElementById("tab");
    var aLiImg = oTab.getElementsByTagName("li");
    var oBtn = document.getElementById("btn");
    var aLiBtn = oBtn.getElementsByTagName("li");
    var index = i = 0;
    var play = timer = null;
    for ( i = 0; i < aLiBtn.length; i++) {
        aLiBtn[i].index = i;
        //切换按钮
        aLiBtn[i].onmouseover = function () {
            show(this.index);
        }
        //鼠标移入移出，播放或暂停
        oBox.onmouseover = function () {
            clearInterval(play);
        }
        oBox.onmouseout = function () { 
            autoPlay();
         }
         //自动播放
        function autoPlay() {
            play = setInterval(function () {
                index++;
                index >= aLiImg.length && (index = 0);
                show(index);
            }, 2000);
        }
        autoPlay();//调用
        //淡入淡出
        function show(a) {
            var alpha = 0;
            index = a;
            for (var i = 0; i < aLiBtn.length; i++) {
                aLiBtn[i].className = "";
            }
            aLiBtn[index].className = "actived";
            clearInterval(timer);
            for (var i = 0; i < aLiImg.length; i++) {
                aLiImg[i].style.opacity = 0;
                aLiImg[i].filter = "alpha(opacity=0)";
            }
            timer = setInterval(function () {
                alpha += 2;
                alpha > 100 && (alpha = 100);
                aLiImg[index].style.opacity = alpha / 100;
                aLiImg[index].filter = "alpha(opacity=" + alpha + ")";
                alpha == 100 && clearInterval(timer);
            }, 30)
        }
    }
}