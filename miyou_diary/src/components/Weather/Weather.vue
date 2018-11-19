<template>
    <div class="weatherToday">
        <!-- <div class="setting_weather">
            <div class="location">
                <p class="location_info">
                    <span>{{selfLocation.province}}</span>
                    <span>{{selfLocation.city}}</span>
                    <span>{{selfLocation.weekDay}}</span>
                </p>
            </div>
            <div class="weather_info">
                <div class="temperature textCenter">
                    {{weatherInfo.temperature}}°
                </div>
                <div class="textCenter distance">湿度：{{weatherInfo.humidity}}</div>
                <div class="textCenter distance">空气质量：{{weatherInfo.quality}}</div>
                <div class="textCenter distance">{{weatherInfo.tips}}</div>
            </div>
        </div> -->
        <swiper :options="swiperOption" ref="mySwiper" class="swiperHeight">
            <swiper-slide>
                <div class="setting_weather">
                    <div class="location">
                        <p class="location_info">
                            <span>{{selfLocation.province}}</span>
                            <span>{{selfLocation.city}}</span>
                            <span>{{selfLocation.weekDay}}</span>
                        </p>
                    </div>
                    <div class="weather_info">
                        <div class="temperature textCenter">
                            {{weatherInfo.wendu}}°
                        </div>
                        <div class="textCenter distance">湿度：{{weatherInfo.shidu}}</div>
                        <div class="textCenter distance">空气质量：{{weatherInfo.quality}}</div>
                        <div class="textCenter distance">{{weatherInfo.tips}}</div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="setting_weather">
                    123
                </div>
            </swiper-slide>
            <div class="swiper-pagination"></div>
        </swiper>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="weather_forecast">
            <div class="weather_item" v-for="item in (weatherInfo.forecast)" :key="item.date">
                <p class="range">{{item.date.slice(-3)}}</p>
                <p class="range left_auto">{{item.low.slice(-4)}}~{{item.high.slice(-4)}}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
    components: {
        swiper,
        swiperSlide
    },
    props: {},
    data() {
        return {
            selfLocation: {
                province: '',
                city: '',
                weekDay: ''
            },
            weekDay: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'],
            weatherInfo: {},
            swiperOption: {
                direction: 'horizontal', // 水平切换选项
                pagination: {
                    el: '.pagination'
                }
            }
        }
    },
    watch: {},
    computed: {},
    methods: {
        addressDetail() {
            let that = this;
            let date = new Date().getDay();
            let dayIndex = date - 1;
            //浏览器定位
            let map = new BMap.Map();
            let geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(async (res) => {
                if (geolocation.getStatus() == BMAP_STATUS_SUCCESS) {
                    console.log(res)
                    that.selfLocation.city = res.address.city;
                    that.selfLocation.province = res.address.province;
                    that.selfLocation.weekDay = that.weekDay[dayIndex];
                    let result = await this.getWeatherInfo(res.address.city);
                    this.weatherInfo = result.data.result;
                    console.log(this.weatherInfo)
                    console.log(this.weatherInfo.forecast)
                }
                else {
                    alert('failed' + this.getStatus());
                }
            })
        },
        getWeatherInfo(cityName) {
            return this.$axios.get('http://47.93.45.54:3000/weather', {
                params: {
                    cityName: cityName
                },
            })
        }
    },
    created() { },
    mounted() {
        this.addressDetail();
    }
}
</script>
<style lang="scss" scoped>
p {
    margin: 0;
}
.weatherToday {
    height: 100%;
    position: relative;
    width: 100%;
}
.setting_weather {
    height: 100%;
}
.swiperHeight {
    width: 100%;
    height: 40%;
    position: relative;
    background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);
}
.location {
    text-align: center;
}
.location_info {
    padding: 10px 0;
    display: inline-block;
    color: white;
}
.textCenter {
    text-align: center;
}
.temperature {
    font-size: 40px;
    color: white;
}
.distance {
    padding: 5px 0;
    color: white;
}
.weather_forecast {
    overflow: scroll;
    height: auto;
    width: 100%;
}
.weather_item {
    box-sizing: border-box;
    padding: 20px 30px;
    position: relative;
}
.range {
    display: inline-block;
}
.left_auto {
    float: right;
}
//使用渐变画0.5px的细线
.weather_item::after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-image: -webkit-linear-gradient(
        0deg,
        transparent 50%,
        #e0e0e0 50%
    );
    background-image: -ms-linear-gradient(0deg, transparent 50%, #e0e0e0 50%);
    background-image: -o-linear-gradient(0deg, transparent 50%, #e0e0e0 50%);
    background-image: linear-gradient(0deg, transparent 50%, #e0e0e0 50%);
}
</style>