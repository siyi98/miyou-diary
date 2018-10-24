<template>
    <div class="wrapper">
        <van-cell-group>
            <van-field v-model="username" left-icon="contact" required clearable label="用户名" icon="question" placeholder="请输入用户名" @click-icon="$toast('请输入用户名')" />
            <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
        </van-cell-group>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {

        }
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() { }
}
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>