import mongoose from "mongoose";
const {Schema} = mongoose


const collection = "Messages"
const schema = new Schema({
    
    email:{
        type: String
    },
    messages:{
            type: String
    }
})


const messagesModel = mongoose.model(collection, schema)
export default messagesModel