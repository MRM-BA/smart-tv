var CronJob = require('cron').CronJob;
var job = new CronJob('0 0 0 * * *', function(){
        console.log('execute');
    },
    function (){
        console.log('stop');
    },
    true,
    'America/Buenos_Aires'
);