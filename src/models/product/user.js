import { Schema , model , models } from "mongoose";
import mongoose from 'mongoose';

const ModelSchema = new Schema({
    title : { type :String, required : true},
    description : String,
    price : {type:Number , required:true}
});

const Products = mongoose.models.Products ||  model('Products' , ModelSchema);
export default Products;

