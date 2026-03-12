const Usuario = require('../models/Usuarios');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registrarUsuarios = async (req,res) => {
    try {
        const {email,password}=req.body;

        //Verificaremos si el usuario existe 
        let usuario = await Usuario.findOne({email});
        if (usuario) return res.status(400).json({msg:'Este brother ya existe'});

        usuario = new Usuario({email,password});

        //Encriptacion
        const salt = await bcrypt.genSalt(10);
        //Ejemplo(la contraseña es [115515])
        //el hash crea la ecriptacion de caracteres como por ejemplo "lsguagfcafu"
        //la salt agrega estos nuevos caracteres"hafbasbf" y se juntan lsguagfcafuhafbasbf, (el bash decide donde se agrega esa parte extra que seria la de salt y se junta con el hash)
        usuario.password = await bcrypt.hash(password,salt);

        await usuario.save(); // Se guarda ya en la parte de base de datos 
        res.status(201).json({msg:'Registro con exito 🗿'})
    } catch (error) {
        res.status(500).json({error: 'Error al registrar', errorMSG: error});
    }
} 

exports.loginUsuario = async (req,res) => {
    try{
        const {email, password } =req.body;
        //verificacion de usuario existente 
        const usuario = await Usuario.find0ne({email});
        if(!usuario) return res.status(400).json({msg:''});

        //verificar la password
        const isMatch = await bcrypt.compare(password, usuario.password);
        if(!isMatch) return res.status(400).json({msg:'La contraseña no es, quien eres?'});

        //Create payload
        const payload = {
            usuario: {
                id: usuario.id,
                email: usuario.email
            }
        };

        //firma del Jwt

        jwt.sign(payload,
            procces.env.JWT_SECRETS,
            {expiresIn:'1h'},
            (error, token) =>{ if (error) throw error; res.json({token});})

    } catch(error){
        res.status(500).json({msg:"error en la conexion",errorMSG: error});
    }
}