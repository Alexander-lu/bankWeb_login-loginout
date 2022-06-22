/**
 * IIFE模式：https://en.wikipedia.org/wiki/Immediately_invoked_function_expression
 * 可以防止变量名/函数名成为全局变量/函数，造成污染
 */
(function () {
  /**
   * 对密码进行加密
   * @param {string} passwd 用户输入的密码
   * @returns {string} 加密后的密码
   */
  function encrypt(passwd) {
    var PASSWORD_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";
    var newStr = "";
    for (let i = 0; i < passwd.length; i++) {
      var posInCipherText = PASSWORD_ALPHABET.indexOf(passwd.charAt(i));
      var posInPlainText = (posInCipherText - 9) % 35;
      newStr += PASSWORD_ALPHABET.charAt(posInPlainText)
    }
    // console.log(newStr);
    return newStr;
  }
  /**
   * 从页面的用户输入中提取帐号和密码
   */
  function extractCredentials() {
    const username = $('#txt_username_79443').val();
    const password = encrypt($('#input_div_password_79445').val());
    return { username, password };
  }
  /**
   * 判断输入是不是非法的
   */
   function isNotGood(data) {
    var patt1=new RegExp(/^1\d{10}$/);
    var patt2=new RegExp(/^[a-zA-Z\._\-]*[a-zA-Z]+[0-9]*@bank\.c(om|n)$/);
    var patt3=new RegExp(/[\._\-][\._\-]/);
    if(patt1.test(data)){
        return false;
    }else if(patt2.test(data)){
        if(data.length>30){
          return true;
        }
        if(patt3.test(data)){
          return true;
        }
        return false;
      }else{
        return true;
      }
  }
  /**
   * 点击登陆按键时的回调函数，向服务器发送用户名和密码，验证是否正确
   */
  function login() {
    $('#error-message').text('').hide();
    const data = extractCredentials();
    if(isNotGood(data.username)){
      $('#error-message').text('您输入的用户名有误！').show();
      return;
    }else{
    // 利用jQuery的ajax API将数据发送到服务器
    // 文档：https://api.jquery.com/jquery.ajax/
    $.ajax({
      type: 'POST',
      url: 'login',
      data: JSON.stringify(data),
      contentType: 'application/json'
    })
      .done(function () {
        window.location.href = 'balance';
      })
      .fail(function (jqXHR) {
        if (jqXHR.status === 403) {
          $('#error-message').text('用户名密码错误！').show();
        } else {
          $('#error-message').text('未知错误！').show();
        }
      });}
  }

  // 添加事件监听函数，用户点击登陆按钮时，调用login函数
 document.querySelector('#login-button').addEventListener('click', login);
})();