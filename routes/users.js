var express = require('express');
var router = express.Router();

var https = require('http');
var request = require('request');

var options = {
    host: 'api.flickr.com',
    path: '/services/feeds'
};

 var url= 'https://api.flickr.com/services/feeds/photos_public.gne'

router.get('/', function(req, res){
    console.log('hi');
request
  .get(url)
  .on('response', function(response,body) {
    response.send(response.data)
    console.log('res',response.statusCode) // 200
    console.log('body:', body);
  },function(err){console.log('err',err)})
});


module.exports = router;

