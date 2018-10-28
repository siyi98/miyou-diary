<template>
    <div class="wrapper">
        <van-cell-group>
            <van-field v-model="formData.username" label-align="center" required clearable label="用户名" icon="question" placeholder="请输入用户名" />
            <van-field v-model="formData.password" label-align="center" type="password" label="密码" placeholder="请输入密码" required />
            <van-field v-model="formData.email" label-align="center" type="email" label="邮箱" placeholder="请输入密码" required />
            <van-field v-model="formData.tel" label-align="center" type="tel" label="手机" placeholder="请输入密码" required />
            <van-radio-group v-model="formData.radio" class="van-cell">
                <label>性别</label>
                <van-radio name="1" style="display: inline-block;">男</van-radio>
                <van-radio name="2" style="display: inline-block;">女</van-radio>
            </van-radio-group>
            <div>
                <van-button size="large" plain type="primary">提交</van-button>
            </div>
        </van-cell-group>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    components: {},
    props: {},
    data() {
        return {
            formData: {
                username: '',
                password: '',
                email: '',
                tel: '',
                radio: '1'
            }
        }
    },
    watch: {},
    computed: {},
    methods: {
        submit() {
            axios.post('http://localhost:3000/register', formData)
                .then((res) => {
                    console.log(res);
                    if (res.data.status === '0') {
                        Toast.success('注册成功');
                        setTimeout(function(){
                            this.$router.push('/app')
                        },2000)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    created() { },
    mounted() {

    }
}
</script>
<style lang="scss" scoped>
.wrapper {
}
</style>