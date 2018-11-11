<template>
    <div class="mainBox">
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
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
    width: 100%;
}
</style>