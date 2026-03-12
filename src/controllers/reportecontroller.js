const Reporte = require("../models/Reports");


//Req = body {JSON} , params url?var1=valor1&var2=valor2, query url/var1/var2 |res back promises
exports.getReports = async () => {
    try {
        const reportes = await Reporte.find(); // traaemos todos los reportes de la base de datos
        res.json(reportes); // respondemos con los reportes en formato JSON
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los reportes", message :error });
        
    }
}

exports.createReport = async (req, res) => {
    try {
        const { titulo, descripcion, ubicacion,} = req.body; // obtenemos los datos del reporte desde el cuerpo de la solicitud y esto se consigue utilizando las variables que queremos conseguir con el const y luego se pone la peticion que en este caso seria el req.body
        let prioridad = "media";
        if(descripcion.toLowerCase().includes("fuego")) descripcion.toLowerCase().includes("incendio")
            prioridad = "alta";
        {
        const nuevoReporte = new Reporte({ titulo, descripcion, ubicacion, prioridad }); // creamos un nuevo reporte utilizando el modelo Reporte y le pasamos los datos obtenidos del cuerpo de la solicitud
        }
            await nuevoReporte.save(); // guardamos el nuevo reporte en la base de datos
            res.status(201).json(nuevoReporte); // respondemos con el nuevo reporte creado en formato JSON y con el status 201 que indica que se ha creado un nuevo recurso 
    } catch (error) {
        res.status(400).json({ error: "Error al crear el reporte", message :error });
    }
}