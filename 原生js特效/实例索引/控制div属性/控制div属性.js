    //       let changeStyle= function(elem,attr,value){//元素，属性，值
    //           elem.style[attr]=value;
    //
    //       };
    //
    // window.onload= function () {
    //
    //     let oBtn = document.getElementsByTagName("input");
    //     let oDiv = document.getElementsByClassName("photo");
    //     let oAtt = ["width","height","background","display","display"];
    //     let oVal = ["100px","100px","none","block"];
    //     for (let i = 0 ; i<oBtn.length;i++) {
    //       oBtn[i].index = i;
    //       //console.log(oBtn[i].index());
    //       oBtn[i].onclick = function () {
    //           this.index == oBtn.length - 1 &&(oDiv.style.cssText = "");
    //           changeStyle(oDiv,oAtt[this.index],oVal[this.index]);
    //       }
    //     }

  //};

    window.onload =function () {
      let oPut = document.getElementsByTagName("input");
      let oDiv = document.getElementsByClassName("photo");
      let oBtn = document.getElementsByClassName("button");
              oBtn[0].onclick = function () {
            oDiv.style.cssText="width:300px";
      };
               oBtn[1].onclick = function () {
            oDiv.style.cssText="height:300px";
     };
                oBtn[2].onclick = function () {
          oDiv.style.cssText="background:red";
     }
    }