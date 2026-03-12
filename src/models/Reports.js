const { default: mongoose } = require("mongoose");

const reportSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    prioridad: {
        type: String,
        enum: ['Baja', 'Media', 'Alta'],
        default: 'Media'
    },
    estado: {
        type: String,
        default: 'Abierto'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
});

MediaQueryListEvent.export = mongoose.model("Reporte", reportSchema);