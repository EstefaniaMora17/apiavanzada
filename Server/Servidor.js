//importaciones necesarias:

//importando express
//const express = require('express')
import express from 'express'   

//importar Dotenv
//require('dotenv').config()

    
//programar la clase servidor

export class Servidor{
    constructor()
    {
        this.app = express()
        this.enrutarPeticiones()
    }
    //metodos del servidor (¿que hace?)

    despertarServidor()
    {
       this.app.listen(process.env.PORT, function(){
            console.log("servidor encendido")
        })
    }
    enrutarPeticiones()
    {
       this.app.get('/api/v1/viernes', function (req, res) {
            res.send('Hello World')
        })

        this.app.get('/api/v1/viernes', function (req, res) {
            res.send('Hello World')
        })
        
        this.app.post('/api/v1/viernes', function (req, res) {
            res.send('Hello World')
        })

        this.app.put('/api/v1/viernes', function (req, res) {
            res.send('Hello World')
        })

        this.app.delete('/api/v1/viernes', function (req, res) {
            res.send('Hello World')
        })

    }
}