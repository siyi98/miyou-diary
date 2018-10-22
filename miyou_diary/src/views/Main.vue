<template>
    <div class="mainBox">
        <router-view></router-view>
        <my-tabbar></my-tabbar>
    </div>
</template>

<script>
import MyTabbar from '../components/Tabbar/Tabbar'

export default {
    components: {
        MyTabbar
    },
}
</script>
<style lang="scss" scoped>
.mainBox {
    padding-bottom: 50px;
    height: 100%;
}
</style>