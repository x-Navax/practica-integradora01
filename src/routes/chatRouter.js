import { Router } from "express";
import messagesModel from "../dao/models/massages.js";
import Handlebars from "handlebars"


const chatRouter = Router();

chatRouter.get("/chatView", async (req, res) => {
    try {
        const messages = await messagesModel.find();
        res.render("chat", { messages });
    } catch (error) {
        console.error("Error retrieving messages:", error);
        res.status(500).send("Internal Server Error");
    }
});


chatRouter.post("/new-message", async (req, res) => {
    try {
        const { email, messages } = req.body;
        
        const newMessage = new messagesModel({ email, messages });
        console.log("🚀 ~ chatRouter.post ~ messages:", messages)
        
        await newMessage.save();
        
        res.status(201).send("Message saved successfully");
    } catch (error) {
        console.error("Error saving message:", error);
        res.status(500).send("Internal Server Error");
    }
});
export default chatRouter;