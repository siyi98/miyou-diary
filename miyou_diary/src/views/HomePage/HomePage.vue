<template>
  <div class="homePage">
    <home-header class="header"></home-header>
    <home-main class="main"></home-main>
  </div>
</template>

<script>
import HomeHeader from './HomeHeader'
import HomeMain from './HomeMain'


export default {
  components: {
    HomeHeader,
    HomeMain
  },
  props: {},
  data() {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created() { },
  mounted() { }
}
</script>
<style lang="scss" scoped>
.homePage {
    padding-bottom: 50px;
    height: 100%;
}
.header {
    height: 8%;
    position: relative;
}
.header:after {
    content: '  ';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(161, 148, 148);
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);//使用transform实现0.5px的边框效果
}
.main {
    height: 92%;
}
</style>