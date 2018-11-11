<template>
    <div class="wrapper">
        <header class="header">
            <div class="icon" @click="goback">
                <van-icon name="arrow-left" />
            </div>
            <div class="headerText">
                <p class="HeaderText_p">{{params.title}}</p>
            </div>
        </header>
    </div>
</template>

<script>
export default {
    components: {},
    props: {
        params: Object,
    },
    data() {
        return {
        }
    },
    watch: {},
    computed: {},
    methods: {
        goback() {
            console.log(this.params.edit)
            this.$emit("childToParent", this.params.edit)
            // this.$router.back(-1)
        },
    },
    created() { },
    mounted() { }
}
</script>
<style lang="scss" scoped>
.wrapper {
    height: 8%;
}
.header {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    height: 100%;
    line-height: 50px;
}
.wrapper::after {
    content: '  ';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(161, 148, 148);
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}
.van-icon-arrow-left::before {
    content: '\F006';
    font-size: 20px;
    font-weight: bold;
}
.HeaderText_p {
    display: inline-block;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
    margin: 0;
}
.van-icon {
    vertical-align: middle;
}
.icon {
    margin-left: 15px;
    margin-right: 15px;
}
</style>