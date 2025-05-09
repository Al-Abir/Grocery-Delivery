import mongosse from "mongoose"


const orderSchema = new mongosse.Schema({
     userId:{
        type:String,
        required:true,
        ref:'user'
     },
     items:[{
        product:{
            type:String,
            required: true,
            ref:'product'
        },
        quantity:{
            type:String,
            required:true
        }
     }],
     amount:{
        type:Number,
        required:true,
       
     },
     address:{
        type:String,
        required:true,
        ref:'address'
     },
     status:{
        type:String,
         default:"Order Placed"
     },
     PaymentType:{
        type:String,
        required:true,
        
     },
     isPad:{
        type:Boolean,
        required:true,
        default:false
        
     },

},{timestamps:true})


const Order = mongosse.models.order ||  mongosse.model('oder',orderSchema)


export default Order;