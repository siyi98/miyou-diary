<template>
    <div class="diary">
        <div class="headerLine">
            <header class="diaryHeader">
                <div class="icon" @click="goback">
                    <van-icon name="arrow-left" />
                </div>
                <div class="headerText">
                    <p class="HeaderText_p">我的日记本</p>
                </div>
                <div class="headerIcon">
                    <ul class="iconList">
                        <li>
                            <span style="color:#0c0b0b">
                                <van-icon name="search" /></span>
                        </li>
                        <li>
                            <span style="color:#0c0b0b">
                                <van-icon name="pending-orders" /></span>
                        </li>
                        <li @click="addDairy()">
                            <span style="color:#0c0b0b">
                                <van-icon name="edit" /></span>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
        <!-- <pub-header></pub-header> -->
        <div class="diaryList">
            <div class="diaryItem" v-for="item in diaryList">
                <router-link :to="{path:'/diaryDetail',query:{id:item.diaryId}}" class="center">
                    <div class="center_top middle">
                        <span class="date fontColor">{{item.date}}</span>
                        <span class="weekDay fontColor">{{item.weekday}}</span>
                        <div class="btn-share">
                            <button class="btn" @click.self.prevent="shareDiary(item.diaryId)">分享</button>
                        </div>
                    </div>
                    <div class="center_bottom middle">
                        <p class="content">{{item.content}}</p>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { Dialog, Toast } from 'vant';
import PubHeader from '../PubHeader.vue'
export default {
    components: {
        PubHeader,
    },
    props: {},
    data() {
        return {
            diaryList: []
        }
    },
    watch: {
    },
    computed: {

    },
    methods: {
        addDairy() {
            Dialog.confirm({
                title: '创建新日记',
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                closeOnClickOverlay: true
            }).then(() => {
                this.$router.push('/editDiary')
            }).catch(() => {
                // on cancel
            });
        },
        goback() {
            this.$router.push('/home')
        },
        getDiaryList() {
            let that = this;
            this.$axios.get('http://47.93.45.54:3000/diary')
                .then((res) => {
                    if (res.data.status == '0') {
                        this.diaryList = res.data.result;
                    }
                })
        },
        shareDiary(diaryId) {
            Dialog.confirm({
                title: '是否将此日记分享供他人观看？',
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                closeOnClickOverlay: true
            }).then(async () => {
                let res = await this.$axios.post('http://47.93.45.54:3000/diary/toshare', {
                    id: diaryId
                })
                if (res.data.status == '1') {
                    Toast('分享失败')
                    return;
                } else if (res.data.status == '0') {
                    Toast('分享成功');
                    setTimeout(() => {
                        this.$router.push('/share')
                    }, 1200)
                }
            })
        },
    },
    created() { },
    mounted() {
        this.getDiaryList()
    }
}
</script>
<style scoped>
p {
    margin: 0;
}
.diary {
    height: 100%;
    width: 100%;
}
.diaryHeader {
    display: flex;
    display: -webkit-flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    height: 100%;
    line-height: 50px;
}
.diaryList {
    height: 92%;
    overflow: scroll;
}
.headerIcon > ul > li {
    display: inline-block;
    padding-right: 20px;
    font-size: 20px;
}
.headerIcon {
    margin-left: auto;
}
.headerLine {
    height: 8%;
}
.headerLine::after {
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
.van-icon {
    vertical-align: middle;
}
.HeaderText_p {
    display: inline-block;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
}
.van-icon-arrow-left::before {
    content: '\F006';
    font-size: 20px;
    font-weight: bold;
}
.icon {
    margin-left: 15px;
    margin-right: 15px;
}
.diaryItem {
    display: flex;
    height: 13%;
    position: relative;
    width: 100%;
    border-width: 0 0 1px 0;
    border-style: solid;
    border-color: #80808036;
}
.fontColor {
    color: gray;
    font-size: 15px;
}

.middle {
    padding-left: 30px;
}
.content {
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px !important;
    color: black;
}
.center {
    margin: auto;
    width: 100%;
}
.btn-share {
    display: inline-block;
    position: relative;
    float: right;
    right: 10%;
}
.btn {
    border: none;
    background: red;
    color: white;
    border-radius: 3px;
    width: 50px;
    height: 25px;
}
</style>