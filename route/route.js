import { Router } from "express";
import { postContact, getContacts, getContact, patchContact, deleteContact } from "../controllers/controller.js";

const contactRouter = Router();

contactRouter.post('/contacts', postContact);

contactRouter.get('/contacts', getContacts);

contactRouter.get('/contacts/:id', getContact);

contactRouter.patch('/contacts/:id', patchContact);

contactRouter.delete('/contacts/:id', deleteContact);


export default contactRouter;