import { searchContacts } from "../controllers/ContactController.js"
import {verifyToken} from "../middlewares/AuthMiddleware.js"
import {Router} from 'express'

const contactRoutes=Router();
contactRoutes.post("/search",verifyToken,searchContacts);

export default contactRoutes