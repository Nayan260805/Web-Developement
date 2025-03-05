const { default: mongoose } = require('mongoose');
const mongooes= require('mongoose');

const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true

    },
    taste:{
        type: String,
        enum: ['sweet','spicy','sour'],
        required: true
    },
    is_drink:{
        type:Boolean,
        default: false
    }
});

const Menu = mongoose.model('Menu', menuItemSchema);
module.exports=Menu;