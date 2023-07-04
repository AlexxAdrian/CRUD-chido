const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/proyecto', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB conectado correctamente.');
    })
    .catch((err) => {
        console.log('Error de conexión a MongoDB: ' + err);
    });

require('./employee.model');