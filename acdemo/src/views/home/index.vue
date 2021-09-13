<template>
  <div>
    <el-container style="width:100%;height: 500px;">
      <el-aside width="200px">
        <div style="height:60px;line-height: 60px;">采集功能列表</div>
        <el-menu
          default-active="performance"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="performance">
            <i class="el-icon-menu"></i>
            <span slot="title">页面性能监控</span>
          </el-menu-item>
          <el-menu-item index="abnormal">
            <i class="el-icon-document"></i>
            <span slot="title">异常监控</span>
          </el-menu-item>
          <el-menu-item index="action">
            <i class="el-icon-setting"></i>
            <span slot="title">用户行为监控</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>采集页面</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "Home",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #409eff;
  color: #fff;
  font-size: 22px;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  color: #fff;
  text-align: center;
  font-size: 20px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.el-menu-item {
  font-size: 16px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
