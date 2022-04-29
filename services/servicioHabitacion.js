import { modeloHabitacion } from '.../models/HabitacionModelo.js'

class ServicioModelo {
    constructor() { }

    async buscarTodos() {
        try {
            //esperar a que el modelo de datos hable con la base de datos y encuentre
            //la almaceno en una variable que seria habitaciones del modelo
            let habitaciones = await modeloHabitacion.find()
            return habitaciones

        } catch (error) {
            console.log("upsssss" + error)
        }
    }

    async buscarPorId(id) {
        try {
            let habitacion = await modeloHabitacion.findById(id)
            return habitacion
        } catch (error) {
            console.log("upsssss" + error)
        }
    }

    async registar(datosPeticion) {
        try {
            //garantizo que tengo un esquema asociado a lo que quiero poner 
            let habitacionRegistar = new modeloHabitacion(datosPeticion)
            //guardo los datos
            return(await habitacionRegistar.save())
        } catch (error) {
            console.log("upsssss" + error)
        }       
     }

    async editar(id, datosPeticion) {
        try {
            return (await modeloHabitacion.findByIdAndUpdate(id, datosPeticion))
        } catch (error) {
            console.log("upsssss" + error)
        }
    }

    async eliminar(id) {
        try {
            return (await modeloHabitacion.findByIdAndDelete(id))
        } catch (error) {
            console.log("upsssss" + error)
        }
    }
}