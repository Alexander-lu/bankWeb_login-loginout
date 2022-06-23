<template>
  <Card v-bind:image="require('../assets/account.png')">
    <a>欢迎回来，XXXX！</a>
    <a>您当前余额为1234.56元</a>
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
    },
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
