import { model, Schema} from "mongoose";
import{ toJSON } from "@reis/mongoose-to-json";
const contactSchema = new Schema({
    name: {type: String, required: true}, 
    contact:{type: String, required: true,},
    whatsApp:{type: Boolean, default: false}
}, {
    timestamps:true
});

contactSchema.plugin(toJSON);
export const ContactModel = model('Contacts', contactSchema);