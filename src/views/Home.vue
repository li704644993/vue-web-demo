<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <div class="login">
        <h1>广告投放后台</h1>
        <div>
          <h4>登录</h4>
          <el-input v-model.trim="telphone" clearable placeholder="请输入手机号码" maxlength="11"></el-input>
          <el-input v-model.trim="password" clearable placeholder="请输入密码" type="password"></el-input>
          <div class="forgetPwd">
            <span>忘记密码?</span>
          </div>
          <br>
          <el-button type="primary" plain>登录</el-button>
        </div>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import url from "@/axios/url";
import axios from "axios";

export default {
  name: "home",
  data() {
    return {
      telphone: "",
      password: ""
    };
  },
  mounted() {
    this.getRequest(url.hello).then(res => {
      console.log(res);
    });
    axios
      .get("https://dev1auth.soeasypay.cn/rest/mobile/login", {
        applicationCode: "adsense",
        mobile: "18991840821",
        password: "123",
        gotoUrl: "www.baidu.com"
      })
      .then(res => {
        console.log(res);
      });
  }
};
</script>
<style lang="scss" scoped>
.el-container {
  height: 100%;
}
.el-header {
  background-color: #2c3049;
  // height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  line-height: normal;
}
.el-main {
  height: 100%;
  background-color: #fff;
}
.login {
  > h1 {
    text-align: center;
  }
  > div {
    width: 400px;
    margin: auto;
    padding: 10px 50px;
    box-sizing: border-box;
    box-shadow: 10px 10px 20px #eee;
    border-radius: 6px;
    height: 300px;
    > h4 {
      text-align: left;
    }
    > .forgetPwd {
      text-align: right;
      font-size: 12px;
      margin-bottom: 10px;
      color: #1980ee;
      > span {
        cursor: pointer;
      }
    }
    > .el-input {
      margin-bottom: 10px;
    }
    > .el-button {
      width: 100%;
    }
  }
}
</style>

