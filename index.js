require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const { createClient } = require('@supabase/supabase-js');
const reporteRoutes = require('./routes/reporte');
const usuariosRoutes = require('./routes/usuarios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

// Routes
app.use('/api', reporteRoutes);
app.use('/api/auth', usuariosRoutes);

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});

// Supabase setup
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB🥵'))
    .catch(err => console.error('MongoDB connection error🥲:', err));

const { generateJWT } = require('./helpers/jwt');

app.post('/api/login', async (req, res) => {

    const { email, password } = req.body;

    // Validación básica 
    if (email !== "email@correo.com" || password !== "Pass123") {
        return res.status(400).json({
            ok: false,
            msg: "Invalid credentials"
        });
    }

    try {

        const token = await generateJWT(email);

        res.json({
            ok: true,
            token
        });

    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: "Token generation error"
        });
    }

});

// Route test
app.get('/', async (req, res) => {

    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .limit(1);

    res.json({
        message: 'API is working Welcome 🚀',
        database_nosql: mongoose.connection.readyState === 1
            ? 'Connected to MongoDB🥵'
            : 'Not connected to MongoDB🥲',
        supabase_auth: error
            ? 'Supabase connection error🥲'
            : 'Connected to Supabase🥵',
    });
});

app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`);
});