<template>
  <div class="login">
      <el-card class="pian">
          <div class="logo"><img src="../../assets/logo_index.png" alt=""></div>
          <el-form :model="loginForm" :rules="loginRules" ref="myForm">
              <el-form-item prop="shouji">
                  <el-input v-model="loginForm.shouji" placeholder="请输入手机号"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                  <el-input v-model="loginForm.code" style="width:60%;" placeholder="请输入验证码"></el-input>
                   <el-button style="float:right;" plain>验证码</el-button>
              </el-form-item>
               <el-form-item prop="chabo">
                   <el-checkbox v-model="loginForm.chabo">我已同意并阅读协议和隐私条款</el-checkbox>
              </el-form-item>
              <el-form-item>
                   <el-button @click="submitLogin" style="width:100%;" type="primary">登录</el-button>
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
        shouji: '',
        code: '',
        chabo: false
      },
      loginRules: {
        shouji: [{ required: true, message: '请输入手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '请输入正确格式' } ],
        code: [{ required: true, message: '请输入手机号' },
          { pattern: /^\d{6}$/, message: '请输入正确格式' }],
        chabo: [ { validator: function (rule, value, callback) {
          if (value) {
            callback()
          } else {
            callback(new Error('请同意'))
          }
        } }]
      }
    }
  },
  methods: {
    submitLogin () {
      this.$refs.myForm.validate(function (isok) {
        if (isok) {
          console.log('通过')
        }
      })
    }
  }

}
</script>
<style lang="less" scoped>
     .login{
         background-image: url(../../assets/fj.jpg);
         height: 100vh;
         background-size: cover;
         display: flex;
         justify-content: center;
         align-items: center;
         .pian {
             height: 350px;
             width: 440px;
             .logo {
                 text-align: center;
                 margin-bottom: 20px;
             }
         }
     }
</style>
