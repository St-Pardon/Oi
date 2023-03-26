import { Schema, model } from "mongoose";
const {ObjectId} = Schema;

const ChatSchema = new Schema({
    chatId: ObjectId,
    time: {type: 'date', required: true},
    senderId: {type: String, required: true}, 
    recipientId: {type: String},
    message: {type: String}
})

export const chatModel = model('chatModel', ChatSchema)