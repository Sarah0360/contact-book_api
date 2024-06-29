import { ContactModel } from "../models/contact_model.js";

export const postContact = async(req, res, next) => {
    try {
        const addContact = await ContactModel.create(req.body);
        res.json(addContact);
        
    } catch (error) {
      next(error);
    }
}


export const getContacts = async(req, res, next) => {
    try {
        const allContacts = await ContactModel.find();
        res.json(allContacts);
    } catch (error) {
        next(error);
    };
}

export const getContact = async(req, res, next) => {
    try {
        const getOneContact = await ContactModel.findById(req.params.id);
        res.json(getOneContact);
    } catch (error) {
        next(error);
    }
}