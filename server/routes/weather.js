const express = require('express');
const router = express.Router();
const http = require('http')
const qs = require('querystring')
const request = require('request')

/**
 * 根据 ip 获取获取地址信息
 */
let options = {
    method:'get',
    url:'http://api.map.baidu.com/location/ip?ak=6iMNcQCl947IZWZ5RdmahiILrwGF0kwO'
}
router.get('/', function (req, res, next) {
    request(options,function(err,res,body){
        console.log(res)
    })
})
module.exports = router;
