<template>
    <div class="wrapper">
        <div class="formField">
            <!-- <form> -->
            <div>
                <input type="text" v-model="username" placeholder="用户名" required>
            </div>
            <div>
                <input type="password" v-model="password" placeholder="密码">
            </div>
            <div>
                <input type="text" v-model="name" placeholder="昵称">
            </div>
            <div>
                <input type="email" v-model="email" placeholder="邮箱">
            </div>
            <div>
                <input type="tel" v-model="tel" placeholder="手机号">
            </div>

            <div>
                <input type="button" class="submit" @click="onSubmit()" value="注      册"></input>
            </div>
            <!-- </form> -->

        </div>

    </div>
</template>

<script>
import { Toast } from 'vant';


export default {
    components: {},
    props: {},
    data() {
        return {
            username: '',
            password: '',
            name: '',
            email: '',
            tel: '',
        }
    },
    watch: {},
    computed: {},
    methods: {
        onSubmit() {
            let _this = this;
            let formData = {
                username: this.username,
                password: this.password,
                name: this.name,
                email: this.email,
                tel: this.tel
            }
            
            _this.$axios({
                url: 'http://47.93.45.54:3000/register',
                method: 'post',
                data: formData,
            })
                .then((res) => {
                    console.log(res)
                    if (res.data.status === '0') {
                        Toast.success(res.data.message);
                        setTimeout(function () {
                            _this.$router.push('/app')
                        }, 2000)
                    } else if (res.data.status === '1') {
                        Toast.fail(res.data.message);
                        setTimeout(function () {
                            _this.$router.go(0)
                        }, 2000)
                    }
                })


        },
    },
    created() { },
    mounted() {

    }
}
</script>

<style lang="less" scoped>
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
    width: 90%;
    color: #3f51b5;
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
.formField > div {
    margin-top: 5%;
}
.submit {
    width: 90%;
    padding: 12px 0;
    font-size: 18px;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    outline: none;
    border-width: 0px; /* 边框宽度 */
    border-radius: 3px; /* 边框半径 */
    background: #1e90ff; /* 背景颜色 */
}
</style>