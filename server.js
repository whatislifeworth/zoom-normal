const express=require('express')
const cors=require('cors')


const port=process.env.PORT || 4000

const app=express()
app.use(cors())

app.use(express.static(__dirname + '/public'))

app.get('/',(req,res)=>{
    console.log(req.body);
})

app.listen(port,()=>{
console.log('Running on port 4000')
})

