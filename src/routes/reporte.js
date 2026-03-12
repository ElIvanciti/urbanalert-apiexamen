const express = require('express');
const router = express.Router();
const reporteController = require('../controllers/reporteController');

//http://localhost:3000/api/getAllReportes
//http://localhost:3000/api/postAllReportes

//Get primero se pone el metodo a utilizar, el endpoint donde dirige, luego a la funcion a donde se dirige
router.get('/getAllReportes', reporteController.getAllReportes);

//Post primero se pone el metodo a utilizar, el endpoint donde dirige, luego a la funcion a donde se dirige
router.post('/createAllReportes', reporteController.createReporte);

module.exports = router;