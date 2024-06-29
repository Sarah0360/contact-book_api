import { Router } from "express";
import { postContact, getContacts, getContact } from "../controllers/controller.js";

const contactRouter = Router();

contactRouter.post('/contacts', postContact);

contactRouter.get('/contacts', getContacts);

contactRouter.get('/contacts/:id', getContact);



export default contactRouter;