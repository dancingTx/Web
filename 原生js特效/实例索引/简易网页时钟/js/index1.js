window.onload = function () {
    var aLi = document.getElementsByTagName("li");
        getTime();//先调用，以便刷新后不会从新开始
        setInterval(getTime,1000);

        function getTime() {
            var date = new Date();
            var dates = [date.getHours(), date.getMinutes(), date.getSeconds()];
            for (var date in dates) {
                aLi[date].innerHTML = format(dates[date]);
            }
        }
        function format(date) { 
        return date.toString().replace(/^(\d)$/,"0$1");//如果是个位数字，前面加上零
         }
}