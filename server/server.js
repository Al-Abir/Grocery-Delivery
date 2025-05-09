import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors'
import connectDB from './confiq/db.js';
import 'dotenv/config'
import userRouter from './routes/userRoute.js';
import sellerRouter from './routes/sellerRoute.js';
import connectCloudinary from './confiq/cloudinary.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import addressRouter from './routes/addressRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const port = process.env.PORT||3000

await connectDB()
await connectCloudinary()

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
app.use('/api/seller',sellerRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/address',addressRouter)
app.use('/api/order',orderRouter)


app.listen(port,()=>{
    console.log(`Server is Running ${port}` )
})