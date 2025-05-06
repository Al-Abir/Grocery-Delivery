import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors'
import connectDB from './confiq/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoute.js';

const app = express();
const port = process.env.PORT||3000

await connectDB()

//allowMultiple orign
const allowedOrgin = ["http://localhost:5173"]

//middleware configuration
app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrgin,credentials:true}))


app.get('/',(req, res)=>{
    res.send("hello Server")
})
app.use('/api/user',userRouter)


app.listen(port,()=>{
    console.log("Server is Running ")
})