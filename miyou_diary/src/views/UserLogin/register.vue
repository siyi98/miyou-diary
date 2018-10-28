<template>
    <div class="wrapper">
        <!-- <van-cell-group>
            <van-field v-model="formData.username" border label-align="center"  clearable  icon="question" placeholder="请输入用户名" />
            <van-field v-model="formData.password" label-align="center" type="password" label="密码" placeholder="请输入密码" required />
            <van-field v-model="formData.name" label-align="center" type="text" label="昵称" placeholder="请输入您的昵称" required />
            <van-field v-model="formData.email" label-align="center" type="email" label="邮箱" placeholder="例:xxx@xxx.com" required />
            <van-field v-model="formData.tel" label-align="center" type="tel" label="手机"  placeholder="请输入您的手机号码" required />
            <van-radio-group v-model="formData.radio" class="van-cell">
                <label>性别</label>
                <van-radio name="1" style="display: inline-block;">男</van-radio>
                <van-radio name="2" style="display: inline-block;">女</van-radio>
            </van-radio-group>
            <div>
                <van-button size="large" plain type="primary" @click="submit()">提交</van-button>
            </div>
        </van-cell-group> -->
        <div class="formField">
            <form>
                <div>
                    <input type="text" placeholder="用户名" required>
                </div>
                <div>
                    <input type="password" placeholder="密码">
                </div>
                <div>
                    <input type="text" placeholder="昵称">
                </div>
                <div>
                    <input type="email" placeholder="邮箱">
                </div>
                <div>
                    <input type="tel" placeholder="手机号">
                </div>
                <div>
                    <input type="tel" placeholder="性别">
                </div>

            </form>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant';

export default {
    components: {},
    props: {},
    data() {
        return {
            formData: {
                username: '',
                password: '',
                name: '',
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
            // axios.post('http://localhost:3000/register', this.formData)
            axios({
                url: 'http://localhost:3000/register',
                method: 'post',
                data: this.formData,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
                .then((res) => {
                    let _this = this;
                    console.log(res.data);
                    if (res.data.status === '0') {
                        Toast.success('注册成功');
                        setTimeout(function () {
                            _this.$router.push('/app')
                        }, 2000)
                    } else if (res.data.status === '1') {
                        Toast.error('注册失败')
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
.formField {
    margin-top: 10%;
}
input::-ms-input-placeholder {
    text-align: center;
}
input::-webkit-input-placeholder {
    text-align: center;
}
input {
    color: #2196f3;
    background: none;
    border: none;
    // border-bottom: 1px solid #ddd;
    text-align: center;
    // border: 1px solid #ccc;
    padding: 7px 0px;
    // border-radius: 3px;
    padding-left: 5px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
input:focus {
    border-color: #2196f3;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(102, 175, 233, 0.6);
}
form > div {
    margin-top: 5%;
}
</style>