<template>
  <div>
    <div class="abnormal">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>代码异常采集</span>
        </div>
        <div class="text">
          <p class="description">说明： 监控代码异常</p>
          <el-button type="primary" @click="syntaxEroHandler"
            >点击按钮执行语法错误代码</el-button
          >
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>监控代码异常</span>
        </div>
        <div class="text">
          <p class="description">说明： 监控代码异常</p>
          <el-button type="primary" @click="getMethodErrorHandler"
            >点击按钮执行方法加载不到</el-button
          >
        </div>
      </el-card>
    </div>
    <div class="abnormal">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>promise 异常</span>
        </div>
        <div class="text">
          <p class="description">
            说明： promise 中的 reject() 没有被正常处理时抛出异常
          </p>
          <el-button type="primary" @click="promiseErrHandler"
            >点击按钮执行 promise 异常代码</el-button
          >
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "abnormal",
  methods: {
    syntaxEroHandler() {
      console.log(a);
    },
    getMethodErrorHandler() {
      window.CodeErr();
    },
    promiseErrHandler() {
      new Promise(function(resolve, reject) {
        reject();
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
