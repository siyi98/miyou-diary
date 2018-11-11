<template>
  <div class="load">
    <div class="load_body">
      <div class="itemChoose">
        <router-link to="/login" class="routerLink">Login</router-link>
        <router-link to="/register" class="routerLink">Register</router-link>
      </div>
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
      currentCity: ''
    }
  },
  created() {

  },
  mounted() {
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.load {
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
.routerLink {
    display: inline-block;
    font-size: 25px;
}
</style>