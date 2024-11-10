import { getConatctsForDMList, searchContacts } from "../controllers/ContactController.js"
import {verifyToken} from "../middlewares/AuthMiddleware.js"
import {Router} from 'express'

const contactRoutes=Router();
contactRoutes.post("/search",verifyToken,searchContacts);
contactRoutes.get("/get-contacts-for-dm",verifyToken,getConatctsForDMList)
export default contactRoutes