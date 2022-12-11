const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    title : {
        type:String, 
        trim: true
    },
    img : {
        type:String
    }
})


const ProductSchema = new mongoose.Schema({

    id: {
        type : Number,
        required : true,
        unique : true
    },
    title : {
        type : String,
        required : true,
        trim : true
    },
    price : {
        type : Number,
        required : true
    },
    description : {
        type : String,
        required : true,
        trim : true
    },
    category : CategorySchema,

    image : {
        type : String
    },
    inStock : {
        type : Number,
        required : true,
        default : 0
    },
    isActive : {
        type : Boolean,
        default : true
    }

})

const ProductData = mongoose.model("product", ProductSchema);


module.exports = ProductData;