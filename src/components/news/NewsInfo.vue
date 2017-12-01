<template>
  <div class="container">
    <div class="news-head">
      <h4>{{newsinfo.title}}</h4>
      <p class="mui-ellipsis news-time ">
        <span>发布时间:{{newsinfo.add_time | dateformatter("YYYY-MM-DD HH:mm:ss")}}</span>
        <span class="mui-pull-right">点击:{{newsinfo.click}}次</span>
      </p>
      <hr>
    </div>
    <div class="news-content" v-html="newsinfo.content">
    </div>
    <div class="news-comment">
      <comment :id="$route.params.id"></comment>
    </div>
  </div>
</template>

<script>
import dateformatter from "../../filters/dateformatter.js"

import axios from "axios"
import comment from "../common/Comment.vue"

export default {
  data() {
    return {
      newsinfo: {}
    }
  },
  filters: {
    dateformatter
  },
  components:{
    comment
  },
  created() {
    axios({
      url: "http://vue.studyit.io/api/getnew/" + this.$route.params.id
    }).then(res => {
      if (res.data.status == 0) {
        this.newsinfo = res.data.message[0]
      }
    })
  }
}
</script>

<style>
.news-head,
.news-content,
.news-comment {
  padding: 5px;
}

.news-content img {
  width: 100%;
}

.news-time {
  font-size: 12px;
}
</style>

