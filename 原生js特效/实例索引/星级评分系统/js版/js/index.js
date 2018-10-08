function css(obj, options) {
    for (var i in options) {
        return obj.style[i] = options[i];
    }
}
var EventUtil = {
    addEvent: function (obj, ev, fn) {
       return obj.attachEvent ? obj.attachEvent("on" + ev, fn) : obj.addEventListener(ev, fn, false);
    },
    removeEvent:function(obj,ev,fn){
        return obj.detachEvent?obj.detachEvent("on"+ev,fn):obj.removeEventListener(ev,fn,false);
    },
    addLoadEvent:function(fn){
        return this.addEvent(window,"load",fn);
    }
};
EventUtil.addLoadEvent(function(){
var rating = (function () {
    var defaults = {
        num: 0, //默认点亮星星的数量
        readOnly: false, //只读，默认false
        select: function () {},
        chosen: function () {}
    }
    var dom = {
        ul: document.getElementById("rating"),
        li: document.getElementsByClassName("rating-item")
    };
    var Light = function (ul, num) {
        this.ul = dom.ul;
        this.item = dom.li;
        this.num = num;
    };
    Light.prototype = {
        //初始化
        init: function () {

        },
        //点亮
        lightOn: function (num) {
            num = parseInt(num);
            for (var i = 0; i < this.item.length; i++) {
                if (i < num) {
                    css(this.item, {
                        "background-position": "0 -26px"
                    });
                } else {
                    css(this.item, {
                        "background-position": "0 0"
                    });
                }
            }
        },
        bindEvent: function () {
            var _this = this;
            EventUtil.addEvent(_this.ul,"mouseover",function(ev){
                
            });
        }

    }
})();
});
    