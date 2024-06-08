const mongoose=require('mongoose');

const menuItem=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  price:{
    type: Number,
    default:2
    
  },
  taste:{
    type:String,
    enum: ["sweet","spicy","sour"],
    required:true
  },
  is_drink:{
    type:String,
    default:false
  },
  ingredients:{
    type:[String],
    default:[]
  },
 num_sales:{
    type:String,
    default: 0
    
  }
})

const menu=mongoose.model('menuItem',menuItem);

module.exports=menu;