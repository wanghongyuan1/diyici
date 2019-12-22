<template>

<el-row class="layout-header" type="flex" align="middle">
    <el-col class="zou" :span="12">
        <i class='el-icon-s-fold'></i>
        <span>江苏传智博客教育科技股份有限公司</span>
    </el-col>
    <el-col class="you" :span="12">
<el-row type="flex" justify="end" align="middle">
    <img :src="userInfo.photo ? userInfo.photo : defaultImg" alt="">
    <!-- 下拉菜单 -->
    <el-dropdown @command="clickMenu">
        <span style="color:pink">{{ userInfo.name }}</span>
       <el-dropdown-menu slot="dropdown">
<el-dropdown-item command="info">个人信息</el-dropdown-item>
<el-dropdown-item command="git">gie地址</el-dropdown-item>
<el-dropdown-item command="lgout">退出</el-dropdown-item>
       </el-dropdown-menu>
    </el-dropdown>
</el-row>
    </el-col>
</el-row>
</template>

<script>
export default {
  data () {
    return {
      userInfo: {}, // 定义一个用户对象
      defaultImg: require('../../assets/adv.jpg') // 先将图片转化成了一个变量
    }
  },
  created () {
    let token = localStorage.getItem('user-token') // 获取用户令牌
    this.$axios({
      url: '/user/profile',
      headers: {
        //   headers参数
        Authorization: `Bearer ${token}`
      }
    }).then(result => {
      this.userInfo = result.data.data
    })
  },
  methods: {
    //   点击菜单项时触发
    clickMenu (command) {
      if (command === 'info') {

      } else if (command === 'git') {
        //   跳转到git地址
        window.location.href = 'https://github.com/shuiruohanyu/90heimatoutiao'
      } else {
        //    退出
        window.localStorage.removeItem('user-token') // 删除令牌
        this.$router.push('/login') // 回到登录页
      }
    }
  }
}
</script>

<style lang="less" scoped>
.layout-header {
    height: 60px;
    .zou {

        font-size: 20px;
        color: red;
        span {
            color: blue;
            margin-left: 5px;
        }
    }
    .you {
        img {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            margin-right: 8px;
        }
    }
}
</style>
