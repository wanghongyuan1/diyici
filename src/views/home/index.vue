<template>
  <!-- 放置一个大容器 -->
  <el-container>
       <!-- 左右布局 -->
    <el-aside>
      <layout-aside style="height:100vh;background-color:#353b4e;width:230px;"></layout-aside>
    </el-aside>
      <!-- 右侧容器 -->
<el-container>
   <!-- 上下布局 -->
   <el-header>
    <layout-header></layout-header>
   </el-header>
   <el-min>
     <!-- 二级路由 -->
     <router-view></router-view>
   </el-min>
</el-container>
  </el-container>
</template>

<script>
// import layoutAside from '../../components/home/layout-aside'
// import layoutHeader from '../../components/home/layout-header'
export default {
  components: {
    // 'layout-aside': layoutAside,
    // 'layout-header': layoutHeader
  }
}
</script>

<style>

</style>
