const School =require('./index');
const school=new School();
school.on('bellRing',({period,text})=>{
    console.log(`We need to run ${period} ${text}`);
})

school.startPeriod()

// run : node event