const express = require('express')
const router = express.Router();
const cheerio = require('cheerio')
// const request = require('request')
const http = require('http')
// const https = require('https')



router.get('/', async function (req, res, next) {
    let html = '';
    let url = 'http://news.baidu.com/';
    http.get(url, (response) => {
        response.on('data', (data) => {
            html += data
        })
        response.on('end', () => {
            let arr = [];
            // console.log(html);
            const $ = cheerio.load(html, {
                decodeEntities: false
            })
            $('.ulist.focuslistnews li a').each((index, item) => {
                console.log(index, item)
                arr.push({
                    title: $(item).text(),
                    href: $(item).attr('href')
                })
                return arr;
            })
            console.log(arr)
            res.json({
                status: '0',
                result: arr
            })
        })
    })

})


module.exports = router