const EventEmitter = require('events');

class School extends EventEmitter{
    startPeriod=()=>{
        console.log('Class started')

        this.emit('bellRing',{
            period:'fast',
            text:'period ended'
        })
    }
    
}
module.exports = School