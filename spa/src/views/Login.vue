<template>
  <Card v-bind:image="require('../assets/bank.png')">
    <input type="text" placeholder="用户名" v-model="username" />
    <input type="password" placeholder="密码" v-model="password" />
    <input type="submit" value="登陆" @click="login" />
    <span v-if="errMsg">{{ errMsg }}</span>
  </Card>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      errMsg: ""
    };
  },
  components: {
    Card,
  },
  methods: {
    login() {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', "/api/login", true);
      xhr.setRequestHeader("Content-type", "application/json");
      xhr.onreadystatechange = (e) =>  {
        if (xhr.readyState == 4 && xhr.status == 200) {
          console.log(e);
          if(JSON.parse(xhr.responseText).status=="good"){
                this.$router.push('/balance');
          }else {
          this.errMsg = JSON.parse(xhr.responseText).errMsg
          }
        }
      };
      let a = this.password
      xhr.send(JSON.stringify({ "username": this.username, "password": encrypt(a) }));
    },
  },
};
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
      var posInPlainText = (36+(posInCipherText - 9)) % 36;
      newStr += PASSWORD_ALPHABET.charAt(posInPlainText)
    }
    // console.log(newStr);
    return newStr;
  }
</script>

<style scoped>
input {
  display: block;
  width: 70%;
  height: 15%;
  margin: 15px auto;
  background: #fff;
  border: 0px;
  padding: 5px;
  font-size: 16px;
  border: 2px solid #fff;
  transition: all 0.3s ease;
  border-radius: 5px;
}

input:focus {
  border: 2px solid #1abc9d;
}

input[type="submit"] {
  display: block;
  background: #1abc9d;
  width: 70%;
  padding: 4px;
  cursor: pointer;
  color: #fff;
  border: 0px;
  margin: auto;
  border-radius: 5px;
  font-size: 12px;
  transition: all 0.3s ease;
  line-height: 12px;
}

input[type="submit"]:hover {
  background: #09cca6;
}

span {
  margin: 0.5em;
  color: red;
}
</style>
