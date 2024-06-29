import express from "express";
import mongoose from "mongoose";
import contactRouter from "./route/route.js";

await mongoose.connect(process.env.MONGO_URL);

const app = express();
app.use(express.json());


 app.use(contactRouter);

//  const port =process.env.PORT || 3008;
app.listen (3008, () => {
    console.log('App is Listening on port 3008');
});