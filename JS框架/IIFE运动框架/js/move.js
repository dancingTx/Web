    (function () {
        let pubArr = [],
            push = pubArr.push,
            slice = pubArr.slice,
            forEach = pubArr.forEach;

        function select(query) {
            return new select.prototype.init(query);
        };
        select.prototype = {
            length: 0,
            splice: function () {},
            get: function (index) { //get方法:支持负数索引
                index = (index + this.length) % this.length;
                return this[index];
            },
            eq: function (index) { //获取dom元素->获取指定的div
                return select(this.get(index));
            },
            each: function (callback) { //遍历->对页面元素进行遍历，
                forEach.call(this, callback); //利用数组本身的foreach，并添加回调函数，使用foreach的形参
                return this; //链式调用
            },
            extend: function () { //继承扩展方法
                if (arguments.length == 0) return;
                for (let i = 0; i < arguments.length; i++) { //遍历extend方法中的对象
                    obj = arguments[i]; //将每一个对象添加到obj上
                    for (let key in obj) { //遍历每一个对象里的方法
                        if (obj.hasOwnProperty(key)) { //如果函数属于此对象
                            //将此对象添加到select.prototype上，方便直接调用
                            this[key] = obj[key]; //this指向extend方法->指向调用extend方法的对象
                        }
                    }
                }
            }
        };
        let init = select.prototype.init = function (query) { //获取dom元素
            let doms;
            if (query.nodeName) {
                doms = [query];
            } else if (query instanceof Array || typeof query === "object" && query.length > 0 && (query.length - 1) in query) {
                doms = query;
            } else {
                doms = document.querySelectorAll(query);
            }
            push.apply(this, doms);
        };
        select.fn = init.prototype = select.prototype; //方便外部扩展
        select.fn.extend({
            getByStyle: function (obj, attr, value) {
                let length = arguments.length;
                switch (length) {
                    case 2:
                        if (typeof attr == "object") {
                            for (let key in attr) {
                                if (attr.hasOwnProperty(key)) {
                                    return obj.style[key] = attr[key];
                                }
                            }
                        } else {
                            return obj.currentStyle ? obj.currentStyle(attr) : getComputedStyle(obj, null)[attr];
                        }
                        break;
                    case 3:
                        return obj.style[attr] = value;
                    default:
                        break;
                }
            },
            moveTo: function (json, fn) {
                let _this = this;
                _this.each(function (obj) {
                    let iSpeed = 0,
                        iCurr = 0;
                    clearInterval(obj.timer);
                    obj.timer = setInterval(() => {
                        let iStop = true;
                        for (let attr in json) {
                            if (attr == "opacity") {
                                iCurr = parseFloat(_this.getByStyle(obj, attr)) * 100;
                            } else {
                                iCurr = parseInt(_this.getByStyle(obj, attr));
                            }
                            iSpeed = (json[attr] - iCurr) / 20;
                            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                            if (iCurr !== json[attr]) {
                                iStop = false;
                                if (attr == "opacity") {
                                    obj.style.filter = `alpha(opacity=${iCurr+iSpeed})`;
                                    obj.style.opacity = (iCurr + iSpeed) / 100;
                                } else {
                                    obj.style[attr] = iCurr + iSpeed + "px";
                                }
                            }
                        }
                        if (iStop) {
                            clearInterval(obj.timer);
                            fn && fn();
                        }
                    }, 30); 
                });
            }
        });
        window._S = select;
    })();