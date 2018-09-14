'use strict';
const
    bodyParser = require('body-parser'),
    config = require('config'),
    express = require('express'),
    request = require('request');

var app = express();
var port = process.env.PORT || process.env.port || 5000;
app.set('port',port);
app.use(bodyParser.json());
app.use(express.static('public'));

const SHEETDB_PRODUCTINFO_ID = config.get('productinfo_id');

app.post('/webhook',function(req, res){
    console.log('[webhook] In');
    let data = req.body;
    let lightStatus = data.queryResult.parameters['LightStatus'];
    let Password = data.queryResult.parameters['Password'];
    if(Password == "我是你爸" || "芝麻開門"){
        var thisQs={};
        thisQs.light_switch = lightStatus;
        thisQs.light_name = 'main';
        request({
            uri:'http://sheetdb.io/api/v1/'+SHEETDB_PRODUCTINFO_ID+'/light_name/main',
            json:true,
            method:'put',
            headers:{'Content-Type':'application/json'},
            qs:{'data':[thisQs]}
        },function(error, response, body){
            if(!error && response.statusCode==200){
                console.log('[sheetdb API] Success');
                sendCards(body, res, true)
            }else
            {
                console.log('[sheetdb API] failed!');
            }
        });
    }else
    {
        let body =null;
        sendCards(body, res, false);
    }
});

app.listen(app.get('port'),function(){
    console.log('[app.listen] Node app is runnung on port',app.get('port'));
});

module.exports = app;

    function sendCards(body, res, status){
        console.log('[snedCaroulCards] In');
        var thisFulfillmentMessage = [];
        var updateTextObject ={};
        var finalResponsetext="";
        if(status){
            finalResponsetext='更新完成';
        }else{
            finalResponsetext='密碼錯誤,更新失敗';
        }
        updateTextObject.text={text:[finalResponsetext]};
        thisFulfillmentMessage.push(updateTextObject);
        var responseObject = {
            fulfillmentMessages: thisFulfillmentMessage
        };
        res.json(responseObject);
    }