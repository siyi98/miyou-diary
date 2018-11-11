<template>
    <header class="home_header_flex">
        <div class="home_header_left">
            <img src="../../assets/logo.png" alt="">
            <p class="logoName" style="display:inline">米柚日记</p>
        </div>
        <div class="home_header_right">
            <ul class="home_header_ul">
                <li>
                    <span style="color:#0c0b0b">
                        <van-icon name="search" /></span>
                </li>
                <li>
                    <span style="color:#0c0b0b">
                        <van-icon name="pending-orders" /></span>
                </li>
                <li>
                    <span style="color:#0c0b0b" @click="toggleShow">
                        <van-icon name="add-o" /></span>
                    <div class="extends_space" v-if="isShow">
                        <ul>
                            <li style="border-bottom: 1px solid rgba(128, 128, 128, 0.56);" @click="navigatorTo('edit')">
                                <span>普通日记本</span>
                            </li>
                            <li style="border-bottom: 1px solid rgba(128, 128, 128, 0.56);">
                                <span>账本</span>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </header>
</template>

<script>

export default {
    components: {},
    props: {},
    data() {
        return {
            isShow: false,
            onShow: false,

        }
    },
    watch: {},
    computed: {},
    methods: {
        toggleShow() {
            this.isShow = !this.isShow;
            this.onShow = !this.onShow;
        },
        toggleHidden() {
            this.isShow = false;
        },
        navigatorTo(arg) {
            if (arg == 'edit') {
                this.$router.push('/editDiary')
            }
        }
    },
    created() {

    },
    mounted() { }
}
</script>
<style lang="less" scoped>
li {
    font-size: 20px;
}
.home_header_flex {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    // height: 8%;
}
.logoName {
    vertical-align: middle;
    line-height: 100%;
    font-size: 20px;
}
.home_header_left > img {
    height: 40px;
    width: 40px;
    vertical-align: middle;
    border: none;
}
.home_header_ul {
    display: inline;
    list-style: none;
}
.home_header_ul > li {
    display: inline;
    vertical-align: middle;
    padding-right: 20px;
}
.home_header_right {
    margin-left: auto;
}
.home_header_left {
    position: relative;
}
.extends_space {
    position: absolute;
    background-color: white;
    right: 0;
    top: 51px;
    width: 160px;
    animation: fade-in;
    animation-duration: 1s;
    -webkit-animation: fade-in 0.5s;
    border-width: 0 0 1px 1px;
    border-style: solid;
    border-color: #9e9e9e;
    z-index: 9999;
}
@keyframes fade-in {
    0% {
        opacity: 0;
    } /*初始状态 透明度为0*/
    40% {
        opacity: 0;
    } /*过渡状态 透明度为0*/
    100% {
        opacity: 1;
    } /*结束状态 透明度为1*/
}
.extends_space ul > li {
    height: 50px;
    line-height: 50px;
    font-size: 18px;
}
.extends_space ul > li > span {
    position: relative;
    left: 20px;
}
.van-icon {
    vertical-align: middle;
}
</style>
