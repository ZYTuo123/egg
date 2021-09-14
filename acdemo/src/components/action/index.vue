<template>
  <div>
    <div class="abnormal">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>点击事件</span>
        </div>
        <div class="text">
          <div class="dataac-cardContent">
            <p class="description">说明： 用户点击事件记录</p>
            <el-button type="primary">点击推广广告位</el-button>
          </div>
        </div>
      </el-card>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>自定义事件采集-用户主动上报异常</span>
        </div>
        <div class="text">
          <p class="description">说明：自定义事件采集</p>
          <el-button type="primary" @click="customEvent"
            >点击上报异常</el-button
          >
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "action",
  methods: {
    customEvent: function() {
      this.$vueDataAc.setCustomAc({
        cusKey: "clickAnyButton",
        cusVal: "click button ...",
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
