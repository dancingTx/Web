function extend(subClass, superClass) {
    var Fn = function () {};
    Fn.prototype = superClass.prototype;
    subClass.prototype = new Fn();
    subClass.prototype.constructor = subClass;
}
window.onload = function () {
    var rating = (function () {
        //默认值
        var defaults = {
            num: 0, //默认点亮的星星数
            readOnly: false, //只读
            select: function () {}, //鼠标移过选择星星的函数
            chosen: function () {}, //点击星星选择的数
        };
        //父类
        var Light = function (starGroup, options) {
            this.$starGroup = $(starGroup);
            this.$item = this.$starGroup.find('.rating-item');
            this.options = options;
            this.add = 1;
            this.selectEvent = null;
        };
        //初始化
        Light.prototype = {
            init: function () {
                this.lightOn(this.options.num);
                if (!this.options.readOnly) {
                    this.bindEvent();
                }
            },
            lightOn: function (num) {
                num = parseInt(num);
                this.$item.each(function (index) {
                    if (index < num) {
                        $(this).attr("src","./images/star-on.png");
                    }else{
                        $(this).attr("src", "./images/star-off.png");
                    }
                });
            },
            bindEvent: function () {
                var _this = this;
                var total = _this.$item.length;
                _this.$starGroup
                    .on(_this.selectEvent, '.rating-item', function (ev) {
                        var $this = $(this),
                            num = 0;
                        _this.select(ev, $this);
                        num = $this.index() + _this.add;
                        _this.lightOn(num);
                        typeof _this.options.select === 'function' &&
                            _this.options.select.call(this, num, total);
                        _this.$starGroup.trigger('select', [num, total]);
                    })
                    .on('click', '.rating-item', function () {
                        var num = $(this).index();
                        _this.options.num = num;
                        typeof _this.options.chosen === 'function' &&
                            _this.options.chosen.call(this, num);
                        _this.$starGroup.trigger('chosen', num);
                    })
                    .on('mouseout', function () {
                        _this.lightOn(_this.options.num);
                    });
            },
            select: function () {
                throw new Error('subClass must be rewrite this method');
            },
            unbindEvent: function () {
                this.$starGroup.off();
            },
        };
        //点亮整颗星星
        var LightEntire = function (starGroup, options) {
            Light.call(this, starGroup, options);
            this.selectEvent = 'mouseover';
        };
        //继承父类函数
        extend(LightEntire, Light);
        //初始化 点亮整颗星星
        LightEntire.prototype.lightOn = function (num) {
            Light.prototype.lightOn.call(this, num);
        };
        LightEntire.prototype.select = function () {};
        //点亮半颗星星
        var LightHelf = function (starGroup, options) {
            Light.call(this, starGroup, options);
            this.selectEvent = 'mousemove';
        };
        //继承父类方法
        extend(LightHelf, Light);
        //初始化 点亮半颗星星
        LightHelf.prototype.lightOn = function (num) {
            var count = parseInt(num),
                isHelf = count !== num;
            Light.prototype.lightOn.call(this, count);
            if (isHelf) {
                this.$item.eq(count).attr("src", "./images/star-helf.png");
            }
        };
        LightHelf.prototype.select = function (ev, $this) {
            num = 0;
            if (ev.pageX - $this.offset().left < $this.width() / 2) {
                //鼠标移动到星星宽度一半
                this.add = 0.5;
            } else {
                this.add = 1;
            }
            num = $this.index() + this.add;
        };
        //模式
        var mode = {
            LightEntire: LightEntire,
            LightHelf: LightHelf,
        };
        //初始化
        var init = function (starGroup, option) {
            //那一组星星，每一组星星点亮的个数
            var $starGroup = $(starGroup),
                rating = $starGroup.data('rating');
            options = $.extend({}, defaults, typeof option === 'object' && option);
            if (!mode[options.mode]) {
                options.mode = 'LightEntire';
            }
            if (!rating) {
                $starGroup.data(
                    'rating',
                    (rating = new mode[options.mode](starGroup, options))
                );
                rating.init();
            }
            if (typeof option === 'string') rating[option]();
        };
        //jq插件
        $.fn.extend({
            rating: function (option) {
                return this.each(function () {
                    init(this, option);
                });
            }
        });
        return {
            init: init,
        };
    })();
    $("#rating").rating({
        num: 2.5,
        mode: "LightHelf",
        chosen: function () {
            rating.init("rating", "unbindEvent");
        }
    });
    $("#rating1").rating({
        num: 3,
        mode: "LightEntire",
        chosen: function () {
            rating.init("#rating1", "unbindEvent");
        }
    });
};