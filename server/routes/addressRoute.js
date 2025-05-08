import express from 'express'
import authUser from '../middleware/authUser.js';
import { addAddress, getAdress } from '../controller/addressController.js';

const addressRouter = express.Router();

addressRouter.post('/add',authUser, addAddress)
addressRouter.get('/get',authUser, getAdress)


export default addressRouter;
