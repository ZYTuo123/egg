<template>
  <div>
    <div class="abnormal">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>请求异常</span>
        </div>
        <div class="text">
          <p class="description">说明： 请求地址异常（访问地址不存在）404</p>
          <el-button type="primary" @click="sendErrorHandler"
            >点击按钮请求服务地址异常</el-button
          >
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>静态资源异常（访问错误的图片地址）</span>
        </div>
        <div class="text">
          <p class="description">说明： 静态资源异常</p>
          <el-button type="primary" @click="getPicErrorHandler"
            >点击按钮执行图片加载异常</el-button
          >
          <div v-if="picFlag">
            <img src="./a.png" alt="加载图片" />
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "network",
  data() {
    return {
      picFlag: false,
    };
  },
  methods: {
    getPicErrorHandler() {
      this.picFlag = true;
    },
    sendErrorHandler() {
      axios
        .get("/error/log")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
};
</script>
<style lang="less" scoped>
.abnormal {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  max-height: 400px;
}
.description {
  font-size: 14px;
  color: #999;
}
</style>
