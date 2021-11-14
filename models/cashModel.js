const mongoose = require('mongoose')


const cashSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    theaterName:{
        type: String,
        required: true
    },
    seatNo:{
        type: Number,
        default: 0
    },
    showtime:{
        type:String,
        default: 0
    },
    Total:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        default:"not paid"
    },
}, {
    timestamps: true
})


module.exports = mongoose.model("Cash", cashSchema)