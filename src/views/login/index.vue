<template>
<div class="login">
  <el-card class="login-card">
<div class="title">
  <img src="../../assets/logo_index.png" alt="">
  </div>
  <!-- 放置表单  el-form model  绑定数据对象 -->
<el-form ref="myForm" :model="loginForm" :rules="logibRules">
  <!-- 表单域 里面  prop要写要检验的字段名  放置 input/select/checkbox 相当于一行-->
  <el-form-item prop="mobile">
    <el-input placeholder="请输入手机号" v-model="loginForm.mobile"></el-input>
  </el-form-item>
   <!-- 表单域 -->
  <el-form-item prop="code">
    <el-input placeholder="验证码" style="width:65%" v-model="loginForm.code"></el-input>
    <el-button style="float:right">发送验证码</el-button>
  </el-form-item>
  <!-- 复选框 -->
  <el-form-item prop="check">
    <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
  </el-form-item>
  <el-form-item>
          <el-button @click="submitLogin" type="primary" style="width:100%">登录</el-button>
        </el-form-item>
</el-form>
  </el-card>
</div>
</template>

<script>
export default {
  data () {
    return {
      loginForm: {
        mobile: '', // 手机号
        code: '', // 验证码
        check: false// 是否勾选
      },
      logibRules: {
        // 验证规则,key(字段名):value(规则 => [])
        mobile: [{ required: true, message: '请输入您手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号格式不正确' }],
        code: [{ required: true, message: '请输入您的验证码' },
          { pattern: /^\d{6}$/, message: '验证码格式不正确' }],
        check: [{ validator: function (rule, value, callback) {
          // 自定义校验函数
          // rule 规则 没啥用
          // value 要校验的字段的值
          // callback 是一个回调函数
          if (value) {
            callback()// 认为当前的规则效验通过
          } else {
            callback(new Error('你应当同意当前条件'))// 如果没有勾选 认为当前校验失败
          }
        } }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myForm.validate((isOK) => {
        if (isOK) {
          //  说明校验通过  应该调用登录接口
          // axios  body参数 get参数地址参数 路由参数  查询参数
          // body参数 axios  data
          // get参数  axios params
          this.$axios({
            url: '/authorizations', // 请求地址 axios 没有指定 类型 默认走get类型
            method: 'post', // 类型
            data: this.loginForm // body 参数
          }).then(result => {
            // 只接受正确结果
            // 前端缓存 登录成功返回给我们的令牌
            window.localStorage.setItem('user-token', result.data.data.token)
            this.$router.push('/home')// 跳转到home页
          }).catch(() => {
            this.$message({
              type: 'warning',
              message: '手机号或者验证码错误!'
            })
          })
        }
      })
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  background-image: url('../../assets/yan.jpg');
  height: 100vh;
  background-size: cover;
  display: flex;
    justify-content: center;
    align-items: center;
    .login-card {
      width: 440px;
      height: 350px;
      .title {
        text-align: center;
        margin-bottom: 20px;
       img {
         height: 45px;
       }
      }
    }
}
</style>
