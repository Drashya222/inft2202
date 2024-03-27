import mongoose from 'mongoose';

const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const animalSchema = new Schema({
  name: String,
  legs: Integer,
  heads: Integer,
  sound: String 
});


export default mongoose.model('Animal', animalSchema);