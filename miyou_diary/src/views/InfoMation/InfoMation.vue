<template>
  <div class="wrapper">
    <div class="headLine">
      <header class="shareHeader">
        <div class="share_text">分享</div>
      </header>
    </div>
    <div class="diaryList">
      <div class="diaryItem" v-for="item in diaryList">
        <router-link :to="{path:'/diaryDetail',query:{id:item.diaryId}}" class="center">
          <div class="center_top middle">
            <span class="date fontColor">{{item.date}}</span>
            <span class="weekDay fontColor">{{item.weekday}}</span>
            <span class="author fontColor">作者：{{item.userName}}</span>
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

import PubHeader from './../../components/PubHeader'
export default {
  components: {
    PubHeader
  },
  props: {},
  data() {
    return {
      params: {
        title: '分享',
        edit: false
      },
      diaryList: []
    }
  },
  methods: {
    getDiaryStatus() {
      this.diaryList = this.$store.state.diaryList
      console.log("123", this.diaryList)
    }
  },
  created() {

  },
  mounted() {
    this.getDiaryStatus()
  },

}
</script>
<style lang="scss" scoped>
.wrapper {
    height: 100%;
}
.shareHeader {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.diaryList {
    height: 92%;
    overflow: scroll;
}
.share_text {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
}
.diaryList::-webkit-scrollbar {
    width: 0 !important;
}
.HeaderText_p {
    display: inline-block;
    font-size: 20px;
    line-height: 20px;
    font-weight: bold;
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
.author {
    float: right;
    right: 5%;
    position: relative;
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
    margin: 0;
}
.center {
    margin: auto;
    width: 100%;
}
.headLine {
    height: 8%;
}
.headLine::after {
    content: '  ';
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(161, 148, 148);
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
}
</style>