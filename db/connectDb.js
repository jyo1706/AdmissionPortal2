const mongoose =require('mongoose')
url='mongodb://127.0.0.1:27017/pra'
live_Url="mongodb+srv://jyotiuser:jyoti1706@cluster0.j4lrbou.mongodb.net/pra?retryWrites=true&w=majority"
const connectDb = ()=>
{
    return mongoose.connect(live_Url)
    .then(()=>
    {
        console.log('successfully connect')
    })
    .catch((error)=>
    {
        console.log(error)
    })

}
module.exports = connectDb
