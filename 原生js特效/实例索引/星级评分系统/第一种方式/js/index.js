 function lightOn(obj, num) {
     obj.each(function (index) {
         if (index < num) {
             $(this).css("background-position", "0 -28px");
         } else {
             $(this).css("background-position", "0 0");
         }
     });
 }
 window.onload = function () {
     var starRating = (function () {
         var init = function (starGroup, num) {
             var $rating = $(starGroup),
                 $item = $rating.find(".rating-item");
             this.num = num;
             //初始化
             lightOn($item, num);
             //触发事件
             /*
             事件委托，减少与dom的交互，增强性能
             利用事件的冒泡，子元素绑定事件，随后会冒泡到父元素
             */
             $rating.on("mouseover", ".rating-item", function () {
                 lightOn($item, $(this).index()) + 1;
             }).on("click", ".rating-item", function () {
                 num = $(this).index() + 1;
             }).on("mouseout", function () {
                 lightOn($item, num);
             });
         }
         //JQuery插件
         $.fn.extend({
             rating: function (num) {
                 return this.each(function () {
                     init(this, num);
                 });
             }
         });
         return {
             init: init
         };
     })();
     //id,默认星星数
     starRating.init("#rating1", 2);
     $("#rating").rating(2);
     $("#rating2").rating(3);
 }