import express from 'express';
import { isAuth, login, logout, register } from '../controller/userController.js'; 
import authUser from '../middleware/authUser.js';

const userRouter = express.Router(); // ✅ Creating a router instance

userRouter.post('/register', register); // ✅ Defining the POST /register route
userRouter.post('/login', login); 
userRouter.get('/is-auth',authUser,isAuth);
userRouter.get('/logout',logout)
export default userRouter; // ✅ Exporting the router to use in your main app
