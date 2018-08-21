<template>
    <div class="home_header_flex">
        <div class="home_header_section">
            <img src="../../assets/logo.png" alt="">
            <h2 style="display:inline">米柚日记</h2>
            <div class="home_header_right">
                <ul class="home_header_ul">
                    <li>
                        <a href=""><van-icon name="search" /></a>
                    </li>
                    <li>
                        <a href=""><van-icon name="pending-orders" /></a>
                    </li>
                    <li>
                        <a href=""><van-icon name="add-o" /></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    props: {},
    data() {
        return {
        }
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() { }
}
</script>
<style lang="scss" scoped>
li{
    font-size: 22px;
}
.home_header_flex {
    display: table;
    width: 100%;
}
.home_header_section {
    display: table-cell;
    vertical-align: middle;
    height: 100%;
}
h2 {
    vertical-align: middle;
    line-height: 100%;
}
img {
    height: 30px;
    width: 30px;
    vertical-align: middle;
}
.home_header_ul {
    display: inline;
    list-style: none;
}
.home_header_ul > li {
    display: inline;
    vertical-align: middle;
    padding-right: 20px;
}
.home_header_right {
    display: inline-block;
    float: right;
    margin-right: 20px;
}
</style>