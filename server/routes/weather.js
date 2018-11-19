const express = require('express');
const router = express.Router();
const http = require('http')
const qs = require('querystring')
const fs = require('fs')
const request = require('request')
const path = require('path')


router.get('/', function (req, res, next) {
    let cityName = (req.query.cityName).slice(0, 2);
    // console.log(cityName)
    let file = path.join(__dirname, '../data/city.json');
    //读取json文件
    fs.readFile(file, 'utf-8', function (err, jsonData) {
        if (err) {
            throw err;
        } else {
            let data = JSON.parse(jsonData);

            data.forEach(item => {
                if (item['city_name'].indexOf(cityName) > -1) {
                    let options = {
                        method: 'get',
                        url: 'http://t.weather.sojson.com/api/weather/city/' + item['city_code']
                    }
                    request(options, function (err, result, body) {
                        let weatherInfo = JSON.parse(body).data
                        console.log('promise', weatherInfo)
                        res.json({
                            status: '0',

                            result: {
                                data: weatherInfo.forecast,
                                tips: weatherInfo.ganmao,
                                quality: weatherInfo.quality,
                                humidity: weatherInfo.shidu,
                                temperature: weatherInfo.wendu,
                                pm25: weatherInfo.pm25
                            }
                        })
                    })
                }
            })

        }
    })

    // let options = {
    //     method: 'get',
    //     url: 'http://t.weather.sojson.com/api/weather/city/' + cityId
    // }
    // request(options, function (err, res, body) {
    //     console.log(res)
    // })

})
module.exports = router;