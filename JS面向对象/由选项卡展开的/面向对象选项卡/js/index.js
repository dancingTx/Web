window.onload = function () {
    let switchTab = function () {};
    switchTab.prototype = {
        getEle: function () {
            return {
                oBtn: document.getElementsByTagName("input"),
                oLi: document.getElementsByTagName("li")
            };
        },
        setStyle: function () {
            let ele = this.getEle(),
                oBtn = ele.oBtn,
                oLi = ele.oLi;
            for (let i = 0; i < oBtn.length; i++) {
                oBtn[i].onclick = function () {
                    for (let i = 0; i < oBtn.length; i++) {
                        oBtn[i].className = "";
                        oLi[i].style.display = "none";
                    }
                    this.className = "active";
                    oLi[i].style.display = "block";
                };
            }
        }
    };
    let tab = new switchTab;
    tab.setStyle();
};