window.onload = function () {
    // let oBtn = document.getElementsByTagName("input"),
    //     aLi = document.getElementsByTagName("li");
    // for (let i = 0; i < oBtn.length; i++) {
    //     oBtn[i].onclick = (function () {
    //         return function () {
    //             for (let i = 0; i < oBtn.length; i++) {
    //                 oBtn[i].className = "";
    //                 aLi[i].style.display = "none";
    //             }
    //             this.className = "active";
    //             aLi[i].style.display = "block";
    //         }
    //     })(i)
    // }

    //闭包自执行单例模式选项卡
    let switchTab = (function () {
        function getEle() {
            return {
                oBtn: document.getElementsByTagName("input"),
                aLi: document.getElementsByTagName("li")
            };
        }

        function setStyle() {
            let ele = getEle(),
                oBtn = ele.oBtn,
                aLi = ele.aLi;
            for (let i = 0; i < oBtn.length; i++) {
                oBtn[i].onclick = function () {
                    for (let i = 0; i < oBtn.length; i++) {
                        oBtn[i].className = "";
                        aLi[i].style.display = "none";
                    }
                    this.className = "active";
                    aLi[i].style.display = "block";
                };
            }
        }
        return {
            setStyle: setStyle
        };
    })();
    switchTab.setStyle();
};