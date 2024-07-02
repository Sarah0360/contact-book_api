import { ContactModel } from "../models/contact_model.js";

export const postContact = async(req, res, next) => {
    try {
        const addContact = await ContactModel.create(req.body);
        res.status(200).send(addContact);
        
    } catch (error) {
      next(error);
    }
}


export const getContacts = async(req, res, next) => {
    try {
        const allContacts = await ContactModel.find();
        res.status(200).json(allContacts);
    } catch (error) {
        next(error);
    };
}

export const getContact = async(req, res, next) => {
    try {
        const getOneContact = await ContactModel.findById(req.params.id);
        res.status(200).json(getOneContact);
    } catch (error) {
        next(error);
    }
};

export const patchContact = async (req, res, next) => {
    try {
        const updateContact = await ContactModel.findByIdAndUpdate(req.params.id);
        res.status(200).json(updateContacte);
    } catch (error) {
        next(error);
    }
};

export const deleteContact = async (req, res, next) => {
    try {
        const deletedContact = await ContactModel.findByIdAndDelete(req.params.id); 
        res.status(200).json(deletedContact);
    } catch (error) {
        next(error);
    }
};