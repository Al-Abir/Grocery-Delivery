import jwt from "jsonwebtoken"


//login Seller :/api/seller/login
export const sellerLogin = async(req, res)=>{
     try {

    const{email, password}= req.body

    if(password===process.env.SELLER_PASSWORD && email===process.env.SELLER_EMAIL){
        const token = jwt.sign({email},process.env.JWT_SECRET,{expiresIn:'7d'})

        res.cookie('sellerToken', token,{
            httpOnly:true,
            secure:process.env.NODE_ENV ==='production',//Use secure cookies in production
            sameSite:process.env.NODE_ENV ==='production'?"none":"strict",//CSRF protection
            maxAge:7*24*60*60*1000, //cookie expiration time
         
        })

        return res.json({success:true, messgae:"Logged In"})
    }else{
        return res.json({success:false, messgae:"Invalid Credentails"})
    }
        
     } catch (error) {
        console.log(error.message)
        return res.json({success:false, message:error.message})
     }
}

//check Auth : api/seller/is-auth
export const isSellerAuth = async(req,res)=>{
    try {
        return res.json({ success: true});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ success: false, message: error.message });
    }
}


//logut User: /api/seller/logout

export const sellerLogout = async(req,res)=>{
    try {
        res.clearCookie('sellerToken',{
          httpOnly:true,
          secure:process.env.NODE_ENV ==='production',
          sameSite:process.env.NODE_ENV ==='production'?"none":"strict",
         
        })
        return res.json({success:true, message:"Logged out"})
    } catch (error) {
        console.log(error.message)
        return res.json({success:false, message:error.message})
    }
}
