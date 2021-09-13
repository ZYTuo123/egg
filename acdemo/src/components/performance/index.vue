<template>
  <div>
    <div>页面加载性能</div>
    <span>
      通过performance属性获取页面时间点<br />
      保留了几个关键数据：<br />
      WT： 白屏时间<br />
      TCP： TCP连接耗时<br />
      ONL： 执行onload事件耗时<br />
      ALLRT： 所有请求耗时<br />
      TTFB： TTFB读取页面第一个字节的时间<br />
      DNS： DNS查询时间<br />
    </span>
    <div>
      <span v-for="(item, i) in new Array(100000).keys()" :key="i">
        {{ i }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "performance",
  data() {
    return {
      asyncArrayData: [],
    };
  },
  methods: {
    genBigData: function() {
      this.asyncArrayData = new Array(100000).keys();
    },
  },
};
</script>
