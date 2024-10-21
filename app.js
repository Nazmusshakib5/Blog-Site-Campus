const express=require('express')
const app=new express();

const router=require('./src/routes/api')

const rateLimit=require('express-rate-limit')
const helmet=require('helmet')
const hpp=require('hpp')
const mongoSanitize=require('express-mongo-sanitize')
const xss=require('xss-clean')
const cors=require('cors')
const cookieParser=require('cookie-parser')

const mongoose=require('mongoose')

const path=require('path')

require('dotenv').config();

app.use(
    helmet({
        contentSecurityPolicy: false,
        xDownloadOptions: false,
    }),
);
app.use(mongoSanitize());
app.use(xss())
app.use(cors())
app.use(cookieParser())
app.use(hpp())

app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit:'50mb'}))

const limiter=rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter);


//database Connection Before Routing
const DB_User_ID=process.env.DB_USER_ID
const DB_User_Pass=process.env.DB_USER_PASS

let URL=`mongodb+srv://${DB_User_ID}:<password>@cluster0.gtiw82u.mongodb.net/BlogSite`;
let OPTION={user:DB_User_ID,pass:DB_User_Pass,autoIndex:true};

mongoose.connect(URL,OPTION).then((res)=>{
    console.log('BlogSite Database connected successfully')
}).catch((err)=>{
    console.log(err)
})


app.use('/api/v1',router)
//directing the control to the frontend

app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.use(express.static('client/dist'));

// Add React Front End Routing

app.get('*',function (req,res) {
    res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
})

module.exports=app;




