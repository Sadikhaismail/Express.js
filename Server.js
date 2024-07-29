const express = require ('express')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const app = express()
app.use(express.json())////miidleware///



app.use('/user',userRoute)
app.use('/product',productRoute)




app.listen(3005,()=>{
    console.log('server is running');
})