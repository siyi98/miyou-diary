<template>
    <van-tabbar v-model="active">
        <van-tabbar-item v-for="(tab,index) in tabbar" :icon="tab.icon" :to="tab.path" :dot="tab.dot" :info="tab.info">
            {{tab.name}}
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            active: 0,
            tabbar: [
                {
                    icon: 'home',
                    name: '首页',
                    path: '/',
                    pathname: 'Home',
                    dot: false,
                    info: ''
                },
                {
                    icon: 'more-o',
                    name: '社区',
                    path: '/commun',
                    pathname: 'Commun',
                    dot: false,
                    info: ''
                },
                {
                    icon: 'chat',
                    name: '消息',
                    path: '/info',
                    pathname: 'Info',
                    dot: false,
                    info: ''
                },
                {
                    icon: 'contact',
                    name: '我的',
                    path: '/oneself',
                    pathname: 'OneSelf',
                    dot: false,
                    info: ''
                },
            ]
        }
    },
    watch: {
        '$route': 'changeActive',
    },

    created() {
        const toName = this.$route.name
        this.setActive(toName)
    },
    computed: {},
    methods: {
        changeActive({ name }) {
            this.setActive(name)
        },
        setActive(name) {
            this.tabbar.forEach((tab, i) => {
                if (tab.pathName == name) {
                    this.active = i;
                    return false;
                }
            })
        }    },

    mounted() { }
}
</script>
<style lang="scss" scoped>
.van-tabbar {
    border-width: 1px 0 0 0;
    border-color: #9e9e9e7a;
    border-style: solid;
}
</style>