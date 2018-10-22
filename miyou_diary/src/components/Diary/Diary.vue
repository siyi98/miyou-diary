<template>
    <div>
        <router-link to="/diary/diaryDetail">123</router-link>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
            items: [
                '我的日记',
                '密码设置',
                '回收站',
                '已发表的日记',
                '意见反馈',
                '联系我们',
            ]
        }
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() { }
}
</script>
<style>
.header_self {
    padding-bottom: 50px;
}
</style>