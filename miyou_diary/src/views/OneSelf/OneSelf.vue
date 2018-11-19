<template>
    <div class="setting">
        <div class="setting_header">
            <div class="setting_header_img">
                <img :src="imgSrc" alt="">
            </div>
        </div>
        <div class="setting_body">
            <div class="cell">
                <i style="display:inline-block"></i>
                <div class="cell_left inline_block">昵称</div>
                <div class="cell_right inline_block">{{userInfo.name}}</div>
            </div>
            <div class="cell">
                <div class="cell_left inline_block">用户名</div>
                <div class="cell_right inline_block">{{userInfo.username}}</div>
            </div>
            <div class="cell">
                <div class="cell_left inline_block">手机号码</div>
                <div class="cell_right inline_block">{{userInfo.phone}}</div>
            </div>
            <div class="cell">
                <div class="cell_left inline_block">邮箱</div>
                <div class="cell_right inline_block">{{userInfo.email}}</div>
            </div>
            <div class="cell">
                <div class="cell_left inline_block">注册时间</div>
                <div class="cell_right inline_block">{{(userInfo.reg_time).slice(0,10)}}</div>
            </div>
        </div>
        <div class="cancel_setting">
            <div>
                <button class="cancel_button" @click="cancel">退出登录</button>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant'
import { Dialog } from 'vant'
export default {
    components: {},
    props: {},
    data() {
        return {
            imgSrc: 'http://pic34.photophoto.cn/20150202/0005018384491898_b.jpg',
            selfLocation: {
                province: '',
                city: '',
                weekDay: ''
            },
            weekDay: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
            userInfo: {},

        }
    },
    watch: {},
    computed: {},
    methods: {

        cancelConfirm() {
            this.$axios.get('http://47.93.45.54:3000/login/cancel')
                .then((res) => {
                    console.log(res)
                    if (res.data.status == '0') {
                        localStorage.clear();
                        Toast({
                            message: res.data.msg,
                            duration: 1000
                        });
                        setTimeout(() => {
                            this.$router.push('/login')
                        }, 1)

                    }
                })
        },
        cancel() {
            Dialog.confirm({
                title: '您真的要退出吗？',
                overlay: true,
                confirmButtonText: '确认退出'

            }).then(() => {
                this.cancelConfirm();
            }).catch(() => {
                // on cancel
            });
        }
    },
    created() {
        let that = this;
        this.userInfo = JSON.parse(localStorage.getItem('userInfo'));
        console.log(this.userInfo);
    },
    mounted() {

    }
}
</script>
<style scoped>
.cell_left {
    margin-left: 10%;
    width: 30%;
}
.setting {
    position: relative;
    height: 100%;
}
.location {
    padding-left: 10%;
    display: inline-block;
}
.location_info {
    color: white;
    font-size: 16px;
    font-weight: bold;
}
.setting_body {
    margin-top: 30%;
    background-color: #fff;
}
@media screen and (max-height: 600px) {
    .setting_body {
        margin-top: 15%;
    }
}
@media screen and (min-height: 1000px) {
    .setting_body {
        margin-top: 10%;
    }
    .setting_header_img {
        top: 21% !important;
    }
}
.cell {
    width: 100%;
    line-height: 25px;
    padding: 10px 15px;
    box-sizing: border-box;
    border-width: 0 0 1px 0;
    border-color: #9e9e9e40;
    border-style: solid;
}
.inline_block {
    display: inline-block;
}
.setting_header {
    height: 25%;
    width: 100%;
    display: flex;
    justify-content: center;
    background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
}

.setting_header_img {
    position: absolute;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    top: 20%;
    z-index: 99;
}
.setting_header_img > img {
    width: 100%;
    height: 100%;
}
.cancel_setting {
    position: absolute;
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: 51px;
}
.cancel_setting > div {
    overflow: hidden;
    width: 100%;
    text-align: center;
}
.cancel_button {
    padding: 8px 0;
    width: 80%;
    text-align: center;
    font-size: 18px;
    color: white;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    outline: none;
    border-width: 0px;
    border-radius: 7px;
    background: #ff0000a3;
}
</style>