<template>
    <div class="editDiary">
        <pub-header :params="params" @childToParent="child"></pub-header>
        <!-- <div class="editHeaderLine">
            <header class="editHeader">
                <div class="icon" @click="goback">
                    <van-icon name="arrow-left" />
                </div>
                <div class="headerText">
                    <p class="HeaderText_p">我的日记本</p>
                </div>
            </header>
        </div> -->

        <div class="editarea">
            <div class="textarea">
                <textarea class="editText" name="" id="" cols="30" rows="10" v-model="text" placeholder="请从此处开始写作..."></textarea>
            </div>
            <div class="button">
                <button class="submit" @click="submit">提交</button>
            </div>
        </div>

    </div>
</template>

<script>
import { Toast } from 'vant';
import { Dialog } from 'vant';
import PubHeader from '../PubHeader.vue'
export default {
    components: {
        PubHeader,
    },
    props: {},
    data() {
        return {
            text: '',
            params: {
                title: '写日记',
                edit: true
            }

        }
    },
    watch: {},
    computed: {},
    methods: {

        goback() {
            this.$router.back(-1)
        },
        submit() {
            let that = this;
            let date = new Date().toLocaleString();
            let week = new Date().getDay();
            let weekday = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
            let weekNum = weekday[week - 1]
            let arr = date.split(' ')[0].split('/')
            let str = arr[1] + '月' + arr[2] + '日'
            this.$axios.post('http://47.93.45.54:3000/diary/add', {
                text: that.text,
                date: str,
                weekday: weekNum
            })
                .then((res) => {
                    console.log(res);
                    if (res.data.status == '0') {
                        Toast.success({
                            message: res.data.msg,
                            duration: 1500
                        });
                        setTimeout(() => {
                            this.$router.push('/diary')
                        }, 1500)
                    }

                })

        },
        child(data) {
            console.log(data);
            if (data == true) {
                Dialog.confirm({
                    title: '日记未完成',
                    message: '是否退出此次编辑',
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'No',
                    closeOnClickOverlay: true
                })
                    .then((res) => {
                        this.$router.back(-1)
                    })
                    .catch(() => {
                        //
                    })
                // this.$router.back(-1)
            }
        }
    },
    created() {
    },
    mounted() { }
}
</script>
<style lang="scss" scoped>
.editDiary {
    height: 100%;
    width: 100%;
}
.editHeaderLine::after {
    content: '  ';
    position: absolute;
    left: 0;
    /* bottom: 0; */
    width: 100%;
    height: 1px;
    background-color: rgb(161, 148, 148);
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}
.editHeaderLine {
    height: 8%;
}
.van-dialog__message--has-title {
    text-align: center;
}
.HeaderText_p {
    display: inline-block;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
}

.editHeader {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    flex-direction: row;
    line-height: 50px;
}
.icon {
    margin-left: 15px;
    margin-right: 15px;
}
.editarea {
    height: 92%;
    width: 100%;
}
.textarea {
    display: flex;
    justify-content: center;
    height: 80%;
    width: 100%;
}
.editText {
    height: 70%;
    width: 75%;
    padding: 15px;
    position: relative;
    top: 50px;
    border-radius: 7px;
}
.button {
    height: 20%;
    width: 100%;
    text-align: center;
}
.submit {
    border: none;
    color: white;
    background-color: #2196f3;
    text-align: center;
    width: 80%;
    padding: 8px 0;
    border-radius: 7px;
}
textarea {
    border: none;
    background: none;
    color: #3f51b5;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color ease-in-out 0.15s,
        -webkit-box-shadow ease-in-out 0.15s;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}
.editText:focus {
    border-color: #2196f3;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #3f51b5;
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px #3f51b5;
}
</style>