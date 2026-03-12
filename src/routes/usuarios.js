const express = require ('express');
const router = express.Router();
const authController = requiere('../controllers/authController');

router.post('/regist', authController.registerUsuario)

router.post('/login', authController.loginUsuario)

module.exports = router;