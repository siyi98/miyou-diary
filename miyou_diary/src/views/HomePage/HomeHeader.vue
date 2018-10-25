<template>
    <div class="home_header_flex">
        <header class="home_header_section">
            <div class="home_header_left">
                <img src="../../assets/logo.png" alt="">
                <h2 style="display:inline">米柚日记</h2>
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
                        <span style="color:#0c0b0b" @click="toggleShow()">
                            <van-icon name="add-o" /></span>
                        <div class="extends_space" v-if="isShow">
                            <ul>
                                <li style="border-bottom: 1px solid rgba(128, 128, 128, 0.56);">
                                    <span>普通日记本</span>
                                </li>
                                <li style="border-bottom: 1px solid rgba(128, 128, 128, 0.56);">
                                    <span>账本</span>
                                </li>
                                <li>
                                    <span>待办</span>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </header>
    </div>
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
        }
    },
    created() {

    },
    mounted() { }
}
</script>
<style lang="less" scoped>
li {
    font-size: 22px;
}
.home_header_flex {
    display: table;
    width: 100%;
    // height: 8%;
}
.home_header_section {
    display: table-cell;
    vertical-align: middle;
    height: 100%;
}
h2 {
    vertical-align: middle;
    line-height: 100%;
}
img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
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
    display: inline-block;
    float: right;
    margin-right: 20px;
}
.home_header_left {
    display: inline-block;
    position: relative;
    left: 20px;
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
    display: inline-block;
    position: relative;
    left: 20px;
}
</style>
