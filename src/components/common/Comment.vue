<template>
    <div>
        <h4>发表评论</h4>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <mt-button type="primary" size="large">发表评论</mt-button>

        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item, index) in commentList" :key="index">
                <a href="javascript:;">
                    <p class="comment-tilte">
                        <span>第{{index + 1}}楼</span>
                        <span>发表时间：{{item.add_time | dateformatter("YYYY-MM-DD HH:mm:ss")}}</span>
                        <span class="mui-pull-right">
                            {{item.user_name}}
                        </span>
                    </p>
                    <img class="mui-media-object mui-pull-right" :src="'../../images/menu' + Math.floor(Math.random() * 6 + 1) + '.png'">
                    <div class="mui-media-body">
                        <p class="mui-ellipsis comment-content">{{item.content}}</p>
                    </div>
                </a>
            </li>
        </ul>

    </div>
</template>

<script>
    import axios from "axios"
    import dateformatter from "../../filters/dateformatter.js"
    export default {
     
 }
</script>

<style>
    textarea {
    height: 150px;
            margin-bottom: 0;
        }
</style>