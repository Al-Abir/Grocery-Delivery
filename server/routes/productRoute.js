import express from "express" 
import { upload } from "../confiq/multer.js";
import authSeller from "../middleware/authSeller.js";
import { addProduct, changeStock, productById, productList } from "../controller/productController.js";


const productRouter = express.Router();


productRouter.post('/add', authSeller, upload.array(['images']), addProduct);
productRouter.get('/list', productList)
productRouter.get('/id', productById)
productRouter.post('/stock',authSeller,changeStock)


export default productRouter;