<template>
    <div class="wrapper">
        <van-tabbar v-model="active" :fixed="true" change="active">
            <van-tabbar-item icon="wap-home" :to="/home" >首页</van-tabbar-item>
            <van-tabbar-item icon="location" dot :to="/commun" >社区</van-tabbar-item>
            <van-tabbar-item icon="chat" info="5" :to="/info" >消息</van-tabbar-item>
            <van-tabbar-item icon="contact" info="20" :to="/oneself" >我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

export default {
    components: {},
    props: {},
    data() {
        return {
            active: 0,
        }
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() { }
}
</script>
<style scoped>
.wrapper {
    position: fixed
}
</style>