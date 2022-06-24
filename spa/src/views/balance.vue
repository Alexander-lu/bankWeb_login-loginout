<template>
  <Card v-bind:image="require('../assets/account.png')">
  <p >欢迎回来，{{ message }}！</p>
  <a>您当前余额为1234.56元</a>
  <input type="submit" value="退出登陆" @click="loginout" />
  </Card>
</template>

<script>
import Card from "../components/Card.vue";
import cookies from 'vue-cookies'
export default {
  name: "balance",
  data() {
    return {
      message: "",
    };
  },
  created(){
                var xhr = new XMLHttpRequest();
                xhr.open('GET', "/api/name", true);
                xhr.setRequestHeader("Content-type", "application/json");
                xhr.onreadystatechange = (e) =>  {
                  if (xhr.readyState == 4 && xhr.status == 200) {
                    console.log(e);
                    if(JSON.parse(xhr.responseText).status=="good"){
                        this.message=JSON.parse(xhr.responseText).name
                    }
                  }
                };
                xhr.send();
  }
  ,
  components: {
    Card,
  },
  methods: {
  loginout(){
    cookies.remove("session_id");
    this.$router.push('/Login');
  }
  },
};
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
