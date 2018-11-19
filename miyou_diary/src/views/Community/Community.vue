<template>
  <div class="community">
    <div class="headLine">
      <header class="com-header">
        <div>
          今日新闻
        </div>
      </header>
    </div>
    <div class="com-newslist">
      <div class="com-newsItem" v-for="item in newsList">
        <van-icon name="like-o" class="com-icon" />
        <p class="com-newsItem-p"><a :href="item.href" class="com-newsItem-a">{{item.title}}</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      newsList: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    getNews() {
      this.$axios.get('http://47.93.45.54:3000/news')
        .then(res => {
          this.newsList = res.data.result;
        })
    }
  },
  created() { },
  mounted() {
    this.getNews()
  }
}
</script>
<style lang="scss" scoped>
.community {
    // padding-bottom: 50px;
    height: 100%;
}
.com-header {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
}
.headLine {
    height: 8%;
}
.headLine::after {
    content: '  ';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(161, 148, 148);
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}
.com-newslist {
    height: 92%;
}
.com-newsItem {
    display: flex;
    justify-content: center;
    align-items: center;
    border-width: 0 0 1px 0;
    border-color: gray;
    border-style: solid;
}
.com-newsItem-p {
    display: inline-block;
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80%;
    text-shadow: 5px 5px 20px #3f51b5;
}
.com-newsItem-a {
    color: #ff5722;
}
.com-icon {
    padding-right: 15px;
}
</style>