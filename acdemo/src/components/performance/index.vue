<template>
  <div>
    <div class="performance">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>页面加载性能</span>
        </div>
        <div class="text item">
          通过performance属性获取页面时间点,保留了几个关键数据：
        </div>
        <div class="text item"> WT： 白屏时间</div>
        <div class="text item"> TCP： TCP连接耗时</div>
        <div class="text item">ONL： 执行onload事件耗时</div>
        <div class="text item"> ALLRT： 所有请求耗时</div>
        <div class="text item">TTFB： TTFB读取页面第一个字节的时间</div>
        <div class="text item"> DNS： DNS查询时间</div>
      </el-card>
    
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>组件首次渲染性能监测(模拟渲染10万个数)</span>
        </div>
        <div class="text">
          说明：</br>
          1）对组件性能监控，目的是发现由于真实数据超预期导致的组件渲染慢问题</br>
          2）这里我们将 maxComponentLoadTime 设置为 500 毫秒，方便触发上报</br> 
        </div>
        <div class="text item scrollContent">
          <span v-for="(item, i) in new Array(100000).keys()" :key="i">
            {{ i }}
          </span>
        </div>
      </el-card>
    </div>
    
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>组件更新性能监控</span>
        <el-button 
            style="float: right; padding: 4px;line-height:18px;font-size:14px;" 
            type="primary"
            :loading="flag"
            @click='genBigData'>
            点击更新-渲染大量数据
        </el-button>
      </div>
      <div class="description">说明：当组件通过异步数据进行渲染时，同样监控组件渲染耗时</div>
      <div class="text item scrollContent"> 
        <span v-for="(item, i) in asyncArrayData" :key="i">
          {{ i }}
        </span>
      </div>
    </el-card>
    </div>
</template>

<script>
export default {
  name: "performance",
  data() {
    return {
      flag:false,
      asyncArrayData: [],
    };
  },
  methods: {
    genBigData: function() {
      this.asyncArrayData = new Array(100000).keys();
    },
  }
};
</script>
<style lang="less" scoped>
  .performance{
    width:100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .description {
    margin-bottom:16px;
    font-size:12px;
    color:#999;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .scrollContent{
    width:100%;
    margin-top:10px;
    border-radius:10px;
    padding:6px;
    max-height:180px;
    overflow-y:scroll;
    background:yellowgreen;
  }
  .scrollContent::-webkit-scrollbar {
    width:0;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    max-height:400px;
  }
</style>