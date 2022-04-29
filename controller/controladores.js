export function buscarTodos(request,response){

    try {
        //el estatus es el codigo de respuesta 
        response.status(200).json({
            mensaje:"Exito en la busqeuedad",
            data:[{nombre:"nia"},{edad:19},{nombre:"toby"},{edad:9}],
            estado:true
        })
    } catch (error) {
        response.status(400).json({
            mensaje:"UPSSSSSSSSSSSSSS",
            data:[],
            estado:true
    })
    }
}   
export function buscarPorId(request,response)
{
    try {
        response.status(200).json({
            mensaje:"Exito en la busqeuedad",
            data:[{nombre:"nia"},{edad:19}],
            estado:true
        
        })
    } catch (error) {
        response.status(400).json({
            mensaje:"UPSSSSSSSSSSSSSS",
            data:[],
            estado:true
        })
    }
}
export function insertar(request,response)
{
    try {
        response.status(200).json({
            mensaje:"Exito en la busqeuedad",
            data:[{nombre:"nia"},{edad:19}],
           estado:true
        })
    } catch (error) {
        response.status(400).json({
            mensaje:"UPSSSSSSSSSSSSSS",
            data:[],
            estado:true
        })
    }
}
export function editar(request,response)
{
    try {
        response.status(200).json({
            mensaje:"Exito en la busqeuedad",
            data:[{nombre:"nia"},{edad:19}],
            estado:true
        })
    } catch (error) {
        response.status(400).json({
            mensaje:"UPSSSSSSSSSSSSSS",
            data:[],
           estado:true
        })
    }
}
export function eliminar(request,response)
{
    try {
        response.status(200).json({
            mensaje:"Exito en la busqeuedad",
            data:[{nombre:"nia"},{edad:19}],
            estado:true
        })
    } catch (error) {
        response.status(400).json({
            mensaje:"UPSSSSSSSSSSSSSS",
            data:[],
            estado:true
        })
    }
}


