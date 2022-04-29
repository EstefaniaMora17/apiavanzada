import mongoose from "mongoose";

const Schema = mongoose.Schema

const Reserva = new Schema({
    fechaIn:{
        type:Date,
        required:true
    },
    fechaOut:{
        type:Date,
        required:true
    },
    costo:{
        type:Number,
        required:true
    },
    idCliente:{
        type:Number,
        required:true
    },
    numeroPersona:{
        type:Number,
        required:true
    }
})
