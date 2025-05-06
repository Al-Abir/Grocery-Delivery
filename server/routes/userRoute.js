import express from 'express';
import { login, register } from '../controller/userController.js'; 

const userRouter = express.Router(); // ✅ Creating a router instance

userRouter.post('/register', register); // ✅ Defining the POST /register route
userRouter.post('/login', login); 
export default userRouter; // ✅ Exporting the router to use in your main app
