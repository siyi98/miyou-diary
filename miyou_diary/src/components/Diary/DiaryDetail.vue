<template>
    <div class="diaryDetail">
        <pub-header :params='params' @childToParent="child"></pub-header>
        <!-- <div class="detail">
            <header class="detailHeader">
                <div class="icon" @click="goback">
                    <van-icon name="arrow-left" />
                </div>
                <div class="headerText">
                    <p class="HeaderText_p">日记详情</p>
                </div>
                <div class="createDate">
                    <span>{{diaryContet.date}}</span>
                    <span>{{diaryContet.weekday}}</span>
                </div>
            </header>
        </div> -->

        <div class="detailSection">
            <div class="content">{{diaryContet.content}}</div>
        </div>

    </div>
</template>

<script>
import PubHeader from '../PubHeader.vue'
export default {
    components: {
        PubHeader
    },
    props: {},
    data() {
        return {
            diaryContet: {},
            params: {
                title: '日记详情',
                edit: false
            }
        }
    },
    methods: {
        goback() {
            this.$router.back(-1)
        },
        getDiaryContent(diaryId) {
            this.$axios.post('http://localhost:3000/diary/search', {
                diaryId: diaryId
            })
                .then(res => {
                    if (res.data.status == '0') {
                        // console.log(res)
                        this.diaryContet = res.data.result[0];
                        console.log(this.diaryContet)
                    }
                })
        },
        child(data) {
            if (data != 'edit') {
                this.$router.back(-1)
            }
        }
    },
    created() {
        let diaryId = this.$route.query.id;
        this.getDiaryContent(diaryId);
    },
    mounted() { }
}
</script>
<style scoped>
.diaryDetail {
    height: 100%;
    width: 100%;
}
.detailHeader::after {
    content: '  ';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(161, 148, 148);
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}
.detailHeader {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    height: 8%;
}
.HeaderText_p {
    display: inline-block;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
}
.icon {
    margin-left: 15px;
    margin-right: 15px;
}
.detailSection {
    height: 92%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content {
    height: 70%;
    width: 80%;
    line-height: 45px;
}
</style>