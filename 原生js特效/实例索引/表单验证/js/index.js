function getLength (str) {
  return str.replace (/[^\x00-\xff]/g, 'xx').length;
}
function findStr (str, n) {
  var tmp = 0, i = 0;
  for (; i < str.length; i++) {
    if (str.charAt (i) == n) {
      tmp++;
    }
  }
  return tmp;
}
window.onload = function () {
  var aInput = document.getElementsByTagName ('input');
  var oUser = aInput[0];
  var oPass = aInput[1];
  var oPass2 = aInput[2];
  var aP = document.getElementsByTagName ('p');
  var User_msg = aP[0];
  var Pass_msg = aP[1];
  var Pass2_msg = aP[2];
  var count = document.getElementById ('count');
  var aEm = document.getElementsByTagName ('em');
  var name_length = 0;
  /*
    1.数字，字母（不区分大小写），汉字，下划线
    2.5-25字符，推荐使用中文会员名
    */
  //用户名
  oUser.onfocus = function () {
    User_msg.style.display = 'block';
    User_msg.innerHTML = '<li class="tip"></li>6-25个字符，一个汉字为两个字符，推荐使用中文会员名';
  };
  oUser.onkeyup = function () {
    count.style.visibility = 'visible';
    name_length = getLength (this.value);
    count.innerHTML = `${name_length}个字符`;
    if (name_length == 0) {
      count.style.visibility = 'hidden';
    }
  };
  oUser.onblur = function () {
    //含有非法字符
    var reg = /[^\w\u4e00-\u9fa5]/g;
    if (reg.test (this.value)) {
      User_msg.innerHTML = '<li class="fail"></li>含有非法字符';
    } else if (name_length == 0) {
      //不能为空
      User_msg.innerHTML = '<li class="fail"></li>用户名不能为空';
    } else if (name_length < 6 || name_length > 25) {
      //长度少于6，长度大于25
      User_msg.innerHTML = '<li class="fail"></li>用户名长度不符合规范';
    } else {
      //成功
      User_msg.innerHTML = '<li class="succ"></li>用户名可以使用';
    }
  };
  //密码
  oPass.onfocus = function () {
    Pass_msg.style.display = 'block';
    Pass_msg.innerHTML =
      '<li class="tip"></li>6-16个字符,请使用字母加数字或符号的组合密码，不能单独使用字母、数字或符号。';
  };
  oPass.onkeyup = function () {
    name_length = getLength (this.value);
    //大于5字符
    if (name_length > 5) {
      aEm[1].className = 'active';
      oPass2.removeAttribute ('disabled');
      Pass2_msg.style.display = 'block';
      Pass2_msg.innerHTML = '<li class="tip"></li>请再输入一次';
    } else {
      aEm[1].className = '';
      oPass2.setAttribute ('disabled', 'true');
      Pass2_msg.style.display = 'none';
    }
    //大于10字符
    if (name_length > 10) {
      aEm[2].className = 'active';
    } else {
      aEm[2].className = '';
    }
  };
  oPass.onblur = function () {
    var m = findStr (this.value, this.value[0]);
    var reg = /[^\d]/g; //全局非数字
    var reg1 = /[^a-zA-Z]/g; //全局非字母
    //不能为空
    if (name_length == 0) {
      Pass_msg.innerHTML = '<li class="fail"></li>密码不能为空';
    } else if (m == name_length) {
      //不能用相同的字符
      Pass_msg.innerHTML = '<li class="fail"></li>不能用相同字符';
    } else if (name_length < 6 || name_length > 16) {
      //长度应为6-16个字符
      Pass_msg.innerHTML = '<li class="fail"></li>密码长度不符合规范';
    } else if (!reg.test (this.value)) {
      //不能全为数字
      Pass_msg.innerHTML = '<li class="fail"></li>不能全为数字';
    } else if (!reg1.test (this.value)) {
      //不能全为字母
      Pass_msg.innerHTML = '<li class="fail"></li>不能全为字母';
    } else {
      //成功
      Pass_msg.innerHTML = '<li class="succ"></li>密码可以使用！';
    }
  };
  //重复密码
  oPass2.onblur = function () {
      if(this.value == oPass.value){
        Pass2_msg.innerHTML = '<li class= "succ"></li> 密码一致';
      }else{
          Pass2_msg.innerHTML = '<li class="fail"></li>重复密码与密码不一致，请重新填写';
      }
  };
};
