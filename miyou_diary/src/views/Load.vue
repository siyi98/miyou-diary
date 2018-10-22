<template>
  <div class="wrapper">
    <div class="load_body">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Register</router-link>
      <div class="van-hairline--top"></div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
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
<style lang="less" scoped>
.wrapper {
    height: 100%;
    width: 100%;
    background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);
    display: flex;
    justify-content: center;
    align-items: center;
}
.load_body {
    display: block;
    height: 50%;
    width: 70%;
    text-align: center;
    background-image: none;
}
</style>