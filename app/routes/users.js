'use strict';

var http = require('http');
var express = require('express');
var _ = require('lodash');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res) {
  http.get('http://stage.mrm.com.ar/mrm/intranet/api/birthdays', function(response){

    response.on('data', function(chunck){
      var currArr = chunck.toString();
      currArr.forEach(function (value){
        console.log('a', value);
      });
      res.send(chunck.toString());
    });
  }).on('error', function(e){
    console.log('Got error '+ e.message);
  });

});

module.exports = router;
