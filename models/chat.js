const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const chatSchema= new Schema({
  email : String,
  handler: String,
  message : String,
  date :{
    type : Date,
    default : Date.now()
  }
});

const Chat=mongoose.model('chat',chatSchema);

module.exports= Chat;