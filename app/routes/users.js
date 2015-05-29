'use strict';

var http = require('http');
var express = require('express');
var _ = require('lodash');
var router = express.Router();


/* GET users listing. */
router.get('/birthdays', function(req, res) {
    http.get('http://stage.mrm.com.ar/mrm/intranet/api/birthdays', function(response){
        response.on('data', function(chunck){
            var arrBirthdaty = [];
            var obj = JSON.parse(chunck.toString());

            _(obj).forEach(function(value) {
                if(value.code !== '1'){
                    arrBirthdaty.push({
                        'id' : value.id,
                        'name' : value.name,
                        'lastname' : value.lastname,
                        'area_name' : value.area_name
                    });
                }
            }).value();
            res.send(arrBirthdaty);
        });
    }).on('error', function(e){
        console.log('Got error '+ e.message);
    });
});

router.get('/income', function(req, res) {
    http.get('http://stage.mrm.com.ar/mrm/intranet/api/ingresos', function(response){
        response.on('data', function(chunck){
            var arr = [];
            var obj = JSON.parse(chunck.toString());

            _(obj).forEach(function(value) {
                if(value.code !== '1'){
                    arr.push({
                        'id' : value.id,
                        'name' : value.name,
                        'lastname' : value.lastname,
                        'area_name' : value.area_name
                    });
                }
            }).value();
            res.send(arr);
        });
    }).on('error', function(e){
        console.log('Got error '+ e.message);
    });
});


router.get('/posts', function(req, res) {
    http.get('http://stage.mrm.com.ar/mrm/intranet/api/posts', function(response){
        response.on('data', function(chunck){
            var arr = [];
            var obj = JSON.parse(chunck.toString());

            _(obj).forEach(function(value) {
                if(value.code !== '1'){
                    arr.push({
                        'id' : value.id,
                        'titulo' : value.titulo,
                        'descripcion' : value.descripcion,
                        'imagen' : value.imagen
                    });
                }
            }).value();
            res.send(arr);
        });
    }).on('error', function(e){
        console.log('Got error '+ e.message);
    });
});

module.exports = router;


