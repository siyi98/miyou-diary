<template>
    <div class="homeMain">
        <div class="homeMain_body">
            <div class="homeMain_content">
                <div class="content_box content_left" style="float:left">

                    <section class="section_left diary" @click="linkTo('diary')"></section>
                    <p>我的日记本</p>

                    <section class="section_left bill" @click="linkTo('diaryDetail')"></section>
                    <p>我的小账本</p>

                </div>

                <div class="content_box content_right" style="float:right;display:block;" to="/oneself">
                    <section class="section_right deal"></section>
                    <p>待办（5）</p>
                </div>

            </div>
        </div>

        <!-- 遮罩层 -->
        <!-- <div class="popContainer" v-if="onShow"></div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            // onShow: true
        }
    },
    watch: {},
    computed: {},
    methods: {
        linkTo(arg) {
            if (arg === 'diary') {
                this.$router.push('/diary')
            } else if (arg === 'diaryDetail') {
                this.$router.push('/diary/diaryDetail')
            }
        }
    },
    created() { },
    mounted() { }
}
</script>
<style scoped lang="less">
.homeMain {
    width: 100%;
}
.homeMain_body {
    width: 90%;
    height: 100%;
    margin: 0 auto;
}
.homeMain_content {
    position: relative;

    height: 100%;
    top: 5%;
}
.content_box {
    width: 45%;
    height: 100%;
}
.content_box p {
    text-align: center;
    clear: both;
    position: relative;
    top: 10px;
    font-size: 18px;
    color: black;
}
.bill {
    margin-top: 20%;
}
section {
    width: 100%;
    height: 20%;
    background: #2196f3;
}
.section_left {
    float: left;
}
.section_right {
    float: right;
}
.popContainer {
    position: fixed;
    z-index: 99;
    top: 8%;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
}
</style>