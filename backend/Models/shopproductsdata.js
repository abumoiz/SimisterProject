import mongoose from 'mongoose';
 
const productStructure= new mongoose.Schema({
category:String,
Type:String,
articlename:String,
publisheddate:Number,
description:String,
productImage:{
    type:String,
}
});
const productStructureModel=mongoose.model('football360',productStructure);
export default productStructureModel;